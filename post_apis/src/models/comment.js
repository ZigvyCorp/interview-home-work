import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
    content: { type: String, require: true },
  },
  { timestamps: true },
);

export const Comment = mongoose.model("comment", commentSchema);
