import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    content: String,
    slug: String,
    tags: [String],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  { timestamps: true }
);

export const PostSchema = mongoose.model("Posts", postSchema);
