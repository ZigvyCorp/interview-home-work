const mongoose = require("mongoose");

// Define Comment Schema
const commentSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create Comment model
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
