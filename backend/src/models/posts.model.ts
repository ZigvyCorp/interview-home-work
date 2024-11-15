import { IPost } from "./../types/post.type";
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema<IPost>({
  _id: mongoose.Types.ObjectId,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  created_at: {
    type: Number,
  },
  tags: [
    {
      type: String,
    },
  ],
});
export const Posts = mongoose.model<IPost>("Posts", PostSchema);
