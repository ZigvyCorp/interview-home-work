const mongoose = require("mongoose");
const Comment = require("./comment-model");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  comments: [Comment.schema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
