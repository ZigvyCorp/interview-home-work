import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  owner: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Number, required: false, default: 0 },
  tags: { type: [String], required: false, default: [] },
});

export const postModel = mongoose.model("Post", postSchema);
