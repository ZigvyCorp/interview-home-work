const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  owner: Number,
  post: Number,
  content: String,
  created_at: Number,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;