import mongoose, { model, Schema } from 'mongoose';

export interface IPost {
  userId: Schema.Types.ObjectId;
  title: string;
  content: string;
  tags: string[];
  comments: [];
}

const postSchema = new Schema<IPost>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
  { timestamps: true },
);

const PostSchema = model<IPost>('Post', postSchema);

export default PostSchema;
