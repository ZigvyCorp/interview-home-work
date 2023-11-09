import mongoose from "mongoose";

const DOCUMENT_NAME = "Post";

const PostSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    owner: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
const PostModel = mongoose.model(DOCUMENT_NAME, PostSchema);
export type PostDocument = typeof PostSchema & Document;
//Export the model
export { PostModel, PostSchema };
