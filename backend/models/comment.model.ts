import mongoose, { Schema } from "mongoose";

export interface ICommentDocument {
  post: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  content: string;
}

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Comments = mongoose.model<ICommentDocument>("comment", commentSchema);
export default Comments;
