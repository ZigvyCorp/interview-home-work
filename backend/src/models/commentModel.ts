import mongoose, { Schema } from "mongoose";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const commentSchema: Schema = new Schema({
  postId: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});

export default mongoose.model<IComment>("Comment", commentSchema);