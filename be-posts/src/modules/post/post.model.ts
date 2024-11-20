import mongoose from 'mongoose';
import { IPostDoc, IPostModel } from './post.interfaces';
import { toJSON } from '../toJSON';
import { paginate } from '../paginate';

const postSchema = new mongoose.Schema<IPostDoc, IPostModel>(
  {
    author: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
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
postSchema.plugin(toJSON);
postSchema.plugin(paginate);

const Post = mongoose.model<IPostDoc, IPostModel>('Post', postSchema);

export default Post;
