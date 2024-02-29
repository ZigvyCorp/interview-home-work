import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "title is required"],
  },
  body: {
    type: String,
    require: [true, "body is required"],
  },
  tags: [
    {
      type: String,
    },
  ],
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = new mongoose.model("Post", postSchema);

export default Post;
