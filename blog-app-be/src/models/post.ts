import mongoose, { Document, Model, Schema, SchemaTimestampsConfig, model } from "mongoose";
import { IUserModel } from "./user";

export interface IPost {
	title: string;
	owner: string | IUserModel;
	content: string;
	tags: string[];
}

export interface IPostModel extends IPost, Document, SchemaTimestampsConfig {}

export const PostSchema: Schema = new Schema(
	{
		title: { type: String, require: true },
		owner: { type: Schema.Types.ObjectId, require: true, ref: "User" },
		content: { type: String, require: true },
		tags: { type: [String], require: true },
	},
	{ timestamps: true }
);

const Post = model<IPostModel>("Post", PostSchema);

export default Post;
