const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: Number,
  name: String,
  email: String,
  body: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
