import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { type: String, require: true },
    content: { type: String, require: true },
    tags: [],
  },
  { timestamps: true },
);

export const Post = mongoose.model("post", postSchema);
