import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
      default: "Anoymous",
    },
    tags: {
      type: [String],
      require: true,
      default: ["Blog"],
    },
  },
  { timestamps: true },
);

export const PostModel = mongoose.model("Post", schema);

