import mongoose from "mongoose";

export interface IPostDocument {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postSchema = new mongoose.Schema(
  {
    userId: String,
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
