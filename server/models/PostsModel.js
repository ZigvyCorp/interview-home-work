import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    author: {
      type: String,
      require: true,
      default: "Unnamed",
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PostsModel = mongoose.model("Posts", schema);
