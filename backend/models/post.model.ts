import mongoose, { Schema } from "mongoose";

export interface IPostDocument {
  user: Schema.Types.ObjectId;
  id: number;
  title: string;
  body: string;
}

const postSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    id: Number,
    title: String,
    body: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Post = mongoose.model<IPostDocument>("post", postSchema);
export default Post;
