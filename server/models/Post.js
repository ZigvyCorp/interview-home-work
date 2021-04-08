const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    userId: Number,
    id: Number,
    title: String,
    body: String,
    authorName: String,
    comments: [],
  })
);

module.exports = Post;
