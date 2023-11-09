import mongoose from "mongoose";
import { CommentResponse, CreateCommentDTO } from "../dto/comment.dto";
import Comment from "../models/comment";
import { IUserModel } from "../models/user";

class CommentService {
	static async getCommentsPost(postId: string) {
		const comments = await Comment.find({ post: new mongoose.Types.ObjectId(postId) }).populate(
			"owner",
			"_id name"
		);

		const commentsData: CommentResponse[] = comments.map(
			(cmt) =>
				({
					id: cmt._id,
					content: cmt.content,
					createdAt: cmt.createdAt,
					owner: {
						id: (cmt.owner as IUserModel)._id,
						name: (cmt.owner as IUserModel).name,
					},
				} as CommentResponse)
		);

		return commentsData;
	}

	static async create(data: CreateCommentDTO) {
		const comment = new Comment(data);

		await comment.save();

		return comment;
	}

	static countCommentsPost(postId: string) {
		return Comment.countDocuments({ post: new mongoose.Types.ObjectId(postId) });
	}
}

export default CommentService;
