import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  owner: string;
  title: string;
  content: string;
  created_at: Date;
  tags: string[];
}

const PostSchema: Schema = new Schema({
  owner: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  tags: { type: [String], default: [] },
});

export default mongoose.model<IPost>("Post", PostSchema);
