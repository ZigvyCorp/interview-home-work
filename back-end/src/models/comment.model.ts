import mongoose from 'mongoose';
import paginate from './plugins/paginate';
import toJSON from './plugins/toJSON';
import { IComment } from '../interfaces';
import { MODEL_NAME } from './name';
import { BlogModel } from './blog.model';

const { Schema } = mongoose;

const commentSchema = new Schema<IComment>(
  {
    blog: {
      type: Schema.Types.ObjectId,
      ref: MODEL_NAME.BLOG,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: MODEL_NAME.USER,
    },
    commentedAt: {
      type: Date,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

commentSchema.post('save', function (doc) {
  BlogModel.findById(doc.blog)
    .exec()
    .then((pp) => {
      pp?.comments.push(doc._id);
      const count = pp?.commentCount || 0;
      pp!.commentCount = count + 1;
      pp?.save();
    });
});

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

/**
 * @typedef Comment
 */
const CommentModel = mongoose.model(MODEL_NAME.COMMENT, commentSchema);

export { CommentModel };
