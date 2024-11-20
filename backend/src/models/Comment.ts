import { model, Schema } from 'mongoose';

export interface IComment {
  userId: Schema.Types.ObjectId;
  postId: Schema.Types.ObjectId;
  content: string;
}

const commentSchema = new Schema<IComment>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    postId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Post"
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const CommentSchema = model<IComment>('Comment', commentSchema);

export default CommentSchema;
