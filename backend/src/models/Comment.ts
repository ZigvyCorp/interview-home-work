import { model, Schema } from 'mongoose';

export interface IComment {
  owner: string;
  title: string;
  content: string;
}

const commentSchema = new Schema<IComment>(
  {
    owner: {
      type: String,
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
  },
  { timestamps: { createdAt: '1576506719083' } },
);

const CommentSchema = model<IComment>('Comment', commentSchema);

export default CommentSchema;
