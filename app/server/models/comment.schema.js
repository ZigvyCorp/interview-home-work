const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    postId: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    collection: "Comment",
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
