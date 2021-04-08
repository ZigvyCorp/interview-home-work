const express = require("express");
const model = require("../models");
const router = express.Router();

// Get single post by id
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await model.Post.findOne({ id: req.params.id });
    const comments = await model.Comment.find({ postId: post.id });
    const user = await model.User.find({ id: post.userId });
    post.comments = comments;
    post.authorName = user[0].name;
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;
