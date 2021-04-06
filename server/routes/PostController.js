const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Get all posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// Get single post
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;
