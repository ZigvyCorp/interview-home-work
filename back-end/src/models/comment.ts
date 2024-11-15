import { Document, model, Schema, Types } from "mongoose";
import { TimeStamps } from "@/types";
import { IUser } from "@/models/user";

export interface IComment extends Document, TimeStamps {
  _id: Types.ObjectId;
  content: string;
  owner: Types.ObjectId;
  post: Types.ObjectId;
}

export interface IPopulatedComment extends Omit<IComment, "owner"> {
  owner: IUser,
}

export const commentSchema = new Schema<IComment>({
  content: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true }
}, { timestamps: true });

const Comment = model<IComment>("Comment", commentSchema);
export default Comment;