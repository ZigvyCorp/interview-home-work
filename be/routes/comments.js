const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching posts");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comments = await Comment.findById(req.params.id);
    if (!comments) {
      res.status(404).send("Comment not found");
      return;
    }
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching");
  }
});
module.exports = router;
