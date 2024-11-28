import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: String,
    body: String,
    userId: String,
    commentCount: Number,
    author: String
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
