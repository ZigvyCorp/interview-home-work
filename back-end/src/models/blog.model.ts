import mongoose from 'mongoose';
import paginate from './plugins/paginate';
import toJSON from './plugins/toJSON';
import { IBlog } from '../interfaces';
import { MODEL_NAME } from './name';

const { Schema } = mongoose;

const blogSchema = new Schema<IBlog>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: MODEL_NAME.USER,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    commentCount: {
      type: Number,
      required: false,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: MODEL_NAME.COMMENT,
      },
    ],
    postedAt: { type: Date },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
blogSchema.plugin(toJSON);
blogSchema.plugin(paginate);

/**
 * @typedef Blog
 */
const BlogModel = mongoose.model(MODEL_NAME.BLOG, blogSchema);

export { BlogModel };
