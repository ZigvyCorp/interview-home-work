import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      max: 500,
    },
    body: {
      type: String,
      max: 500,
    },
    comment: {
      type: [
        {
          ref: "comment",
          type: mongoose.Types.ObjectId,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("posts", PostSchema);
