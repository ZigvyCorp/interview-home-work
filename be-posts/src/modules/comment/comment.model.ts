import mongoose from 'mongoose';
import { ICommentDoc, ICommentModel } from './comment.interfaces';
import { toJSON } from '../toJSON';
import { paginate } from '../paginate';

const commentSchema = new mongoose.Schema<ICommentDoc, ICommentModel>(
  {
    postId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

const Comment = mongoose.model<ICommentDoc, ICommentModel>('Comment', commentSchema);

export default Comment;
