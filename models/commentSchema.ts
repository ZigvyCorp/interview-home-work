import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    content: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  },
  { timestamps: true }
);

export const CommentSchema = mongoose.model("Comments", commentSchema);
