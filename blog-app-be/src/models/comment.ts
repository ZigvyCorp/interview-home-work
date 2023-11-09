import mongoose, { Document, Model, Schema, SchemaTimestampsConfig, model } from "mongoose";
import { IUserModel } from "./user";
import { IPostModel } from "./post";

export interface IComment {
	owner: string | IUserModel;
	post: string | IPostModel;
	content: string;
}

export interface ICommentModel extends IComment, Document, SchemaTimestampsConfig {}

export const CommentSchema: Schema = new Schema(
	{
		content: { type: String, require: true },
		owner: { type: Schema.Types.ObjectId, require: true, ref: "User" },
		post: { type: Schema.Types.ObjectId, require: true, ref: "Post" },
	},
	{ timestamps: true }
);

const Comment = model<ICommentModel>("Comment", CommentSchema);

export default Comment;
