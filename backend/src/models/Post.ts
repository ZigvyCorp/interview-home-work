import mongoose, { model, Schema } from 'mongoose';

export interface IPost {
  owner: string;
  title: string;
  content: string;
  tags: string[];
  comments: [];
}

const postSchema = new Schema<IPost>(
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
    tags: {
      type: [],
      default: [],
    },
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }]
  },
  { timestamps: { createdAt: '1576506719083' } },
);

const PostSchema = model<IPost>('Post', postSchema);

export default PostSchema;
