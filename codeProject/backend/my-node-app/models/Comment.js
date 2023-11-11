// Comment.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  owner: {
    type: Number,
    required: true,
  },
  post: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
