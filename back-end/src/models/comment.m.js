import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  owner: { type: Number, required: true },
  post: { type: Number, required: true },
  content: { type: String, required: true },
  created_at: { type: Number, required: false, default: 0 },
});

export const commentModel = mongoose.model("Comment", commentSchema);
