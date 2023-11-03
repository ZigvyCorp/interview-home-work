const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      index: true,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    author: {
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
