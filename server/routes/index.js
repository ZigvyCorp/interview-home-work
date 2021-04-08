const express = require("express");
const model = require("../models");
const router = express.Router();

// Get all posts
router.get("/posts", async (req, res) => {
  const posts = await model.Post.find();
  const comments = await model.Comment.find();
  const users = await model.User.find();
  posts.map((post, idx, arr) => {
    post.comments = comments.filter((c) => c.postId === post.id);
    post.authorName = users.find((u) => u.id === post.userId).name;
    if (idx === arr.length - 1) res.send(posts);
  });
});

module.exports = router;
