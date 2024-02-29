import { Document, Schema, Model, model } from "mongoose";

export interface ICommentsModel extends Document {
  id: number;
  owner: number;
  post: number;
  content: string;
  created_at: number;
}
const CommentSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    owner: { type: Number, required: true, ref: "users" },
    post: { type: Number, required: true, ref: "posts" },
    content: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export const CommentModel: Model<ICommentsModel> = model<ICommentsModel>(
  "Comments",
  CommentSchema
);
