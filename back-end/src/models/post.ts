import { Document, model, Schema, Types } from "mongoose";
import User, { IUser } from "@/models/user";
import { TimeStamps } from "@/types";
import { IComment, IPopulatedComment } from "@/models/comment";

export interface IPost extends Document, TimeStamps {
  _id: Types.ObjectId;
  title: string;
  content: string;
  slug: string;
  owner: Types.ObjectId;
  tags: string[];
  comments: Types.ObjectId[];
}

export interface IPopulatedPost extends Omit<IPost, "owner" | "comments"> {
  owner: IUser,
  comments: IPopulatedComment[]
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: User.modelName, required: true },
  tags: { type: [String], required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
}, { timestamps: true });

const Post = model<IPost>("Post", postSchema);

export default Post;