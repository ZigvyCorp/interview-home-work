import mongoose from "mongoose";

const DOCUMENT_NAME = "Comment";

const CommentSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    owner: {
      type: Number,
      ref: "User",
      required: true,
    },
    post: {
      type: Number,
      ref: "Post",
      required: true,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const CommentModel = mongoose.model(DOCUMENT_NAME, CommentSchema);
export type CommentDocument = typeof CommentSchema & Document;
//Export the model
export { CommentModel, CommentSchema };
