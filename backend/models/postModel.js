const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    postId: { 
      type: Number, 
      required: true,
    },
    author: { 
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    createdDate: {
      type: Date,
      default: Date.now()
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    comments : [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Comment",
      }
    ]
  }
);


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
