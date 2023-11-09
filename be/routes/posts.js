const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching posts");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching");
  }
});
module.exports = router;
