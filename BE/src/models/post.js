import { Schema, Types, model } from 'mongoose';

const postSchema = new Schema({
  owner: {
    type: Types.ObjectId,
    ref: 'User',
  },
  title: { type: String, require: true },
  content: { type: String, require: true },
  created_at: { type: Date, default: Date.now },
  tags: [String],
});

export const Post = model('Post', postSchema);
