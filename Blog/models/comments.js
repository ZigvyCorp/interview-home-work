import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "post",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    email: {
      type: String,
      max: 500,
    },
    body: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);
export const Comment = mongoose.model("comment", CommentSchema);
