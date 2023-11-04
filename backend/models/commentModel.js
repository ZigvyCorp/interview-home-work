const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    post: { 
        type: mongoose.Schema.ObjectId, 
        ref: "Post",
        required: true,
    },
    postId: {
      type: Number,
      required: true,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    body: {
        type: String,
    }
  }
);


const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
