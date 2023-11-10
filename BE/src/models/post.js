import { Schema, Types, model } from 'mongoose';

const postSchema = new Schema(
  {
    _id: Number,
    owner: {
      type: Number,
      ref: 'User',
    },
    title: String,
    content: String,
    created_at: Date,
    tags: [String],
  },
  { _id: false }
);

export const Post = model('Post', postSchema);
