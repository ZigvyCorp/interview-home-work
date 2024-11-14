import { IComment } from "./../types/comment.type";
import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema<IComment>({
  _id: mongoose.Types.ObjectId,
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Posts",
  },
  content: {
    type: String,
    default: "",
  },
  created_at: {
    type: Number,
  },
});
export const Comments = mongoose.model<IComment>("Comments", CommentSchema);
