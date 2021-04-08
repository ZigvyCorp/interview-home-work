const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    postId: Number,
    id: Number,
    name: String,
    email: String,
    body: String,
  })
);

module.exports = Comment;
