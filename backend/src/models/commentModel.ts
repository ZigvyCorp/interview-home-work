import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  post: string;
  owner: string;
  content: string;
  created_at: Date;
}

const CommentSchema: Schema = new Schema({
  post: { type: String, required: true },
  owner: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IComment>("Comment", CommentSchema);
