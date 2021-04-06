const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// Get all comments
router.get("/comments", async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

// Get single comment
router.get("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    res.send(comment);
  } catch {
    res.status(404);
    res.send({ error: "Comment doesn't exist!" });
  }
});

module.exports = router;
