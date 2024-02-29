import { Model, Schema, model } from "mongoose";
import { UserModel } from "./user.model";

export interface IPostsModel {
  id: number;
  owner: number;
  title: string;
  content: string;
  created_at?: number;
  tags: string;
  comments?: string[];
}
const PostSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    owner: { type: Number, required: true, ref: "users" },
    title: { type: String },
    content: { type: String },
    tags: { type: [String] },
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);
export const PostModel: Model<IPostsModel> = model<IPostsModel>(
  "posts",
  PostSchema
);
