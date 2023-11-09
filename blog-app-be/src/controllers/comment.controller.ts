import { Request, Response } from "express";
import { createCommentSchema, getCommentsPostSchema } from "../dto/comment.dto";
import CommentService from "../services/comment.service";
import { ValidationError } from "yup";

class CommentController {
	static async getCommentsPost(req: Request, res: Response) {
		const postId = req.query.postId as string;

		try {
			const data = getCommentsPostSchema.validateSync(
				{ id: postId },
				{
					abortEarly: false,
					stripUnknown: true,
				}
			);

			const comments = await CommentService.getCommentsPost(data.id);

			return res.json({
				message: "Success",
				data: comments,
			});
		} catch (e) {
			const error = e as ValidationError;

			return res.status(422).json({ errors: error.errors });
		}
	}

	static async create(req: Request, res: Response) {
		const { body } = req;

		try {
			const data = createCommentSchema.validateSync(body, {
				abortEarly: false,
				stripUnknown: true,
			});

			const comment = await CommentService.create(data);

			return res.json({
				message: "Success",
				data: comment,
			});
		} catch (e) {
			const error = e as ValidationError;

			return res.status(422).json({ errors: error.errors });
		}
	}
}

export default CommentController;
