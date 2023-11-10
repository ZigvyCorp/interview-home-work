import { Schema, Types, model } from 'mongoose';

const CommentSchema = new Schema(
  {
    _id: Number,
    owner: {
      type: Number,
      ref: 'User',
    },
    post: {
      type: Number,
      ref: 'Post',
    },
    content: String,
    created_at: Date,
  },
  { _id: false }
);

export const Comment = model('Comment', CommentSchema);
