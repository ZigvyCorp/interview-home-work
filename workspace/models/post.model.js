import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: String,
    body: String,
    userId: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
