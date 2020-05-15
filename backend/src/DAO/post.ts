import { model, Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      lowsercase: true,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Post = model("Post", postSchema, "posts");
