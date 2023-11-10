import mongoose from "mongoose";
import { IComment } from "../types/comment/comment.type";

const CommentSchema = new mongoose.Schema(
	{
		username: { type: mongoose.Types.ObjectId, ref: "Users" }, // id user comment
		postId: mongoose.Types.ObjectId, // id of post
		postUserId: mongoose.Types.ObjectId, // id post of user create
		content: { type: String, required: true },
		// replyCm: { type: mongoose.Types.ObjectId, ref: "Comments" },
		// replyUser: { type: mongoose.Types.ObjectId, ref: "Users" },
	},
	{ timestamps: true }
);

export default mongoose.model<IComment>("Comments", CommentSchema);
