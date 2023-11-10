import mongoose from "mongoose";
import { IPosts } from "../types/post/post.type";

const PostSchema = new mongoose.Schema(
	{
		username: { type: mongoose.Types.ObjectId, ref: "Users" },
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		tags: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<IPosts>("Posts", PostSchema);
