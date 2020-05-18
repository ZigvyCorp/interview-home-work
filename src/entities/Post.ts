import mongoose, { Document, Schema } from 'mongoose';
import logger from '@shared/Logger';

export interface IPost extends Document {
  id?: number;
  owner: number;
  title: string;
  content: string;
  created_at: number;
  tags?: string[];
}

export interface ISearchPost {
  title?: string;
  tags?: object;
}

const PostSchema: Schema = new Schema({
  id: { type: Number },
  owner: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String },
  created_at: { type: Number },
  tags: { type: Array },
}, { autoCreate: true, collection: 'posts', });
export default mongoose.model<IPost>('Post', PostSchema);
