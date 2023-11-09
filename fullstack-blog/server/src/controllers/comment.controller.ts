import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { Comment, Post } from "../models";
import { IComment, IPost } from "../types";
import { handleError, handleResponse } from "../utils";

// get comments from jsonplaceholder and save to db
export async function getCommentFromJPAndSaveToDb(req: Request, res: Response) {
	try {
		const { data } = await axios.get(`${process.env.MOCK_API_URL}/comments`);
		const comments: IComment[] = data;
		const posts = await Post.find();

		comments.forEach(async (comment) => {
			const newComment = new Comment(comment);
			newComment.postId = posts.find((post: IPost) => post.jsonId === comment.postId)._id;
			await newComment.save();
		});

		res.status(200).json(handleResponse(comments, 200, "Posts fetched successfully"));
	} catch (error) {
		handleError(error, 500);
	}
}

// get all comments with post id
export async function getAllCommentsWithPostId(req: Request, res: Response, next: NextFunction) {
	const { postId } = req.params;
	const { page, limit } = req.query;
	const pageNumber = +page || +process.env.PAGE_NUMBER;
	const limitNumber = +limit || +process.env.LIMIT_NUMBER;

	try {
		const totalComments = await Comment.countDocuments({ postId });
		const totalPages = Math.ceil(totalComments / limitNumber);

		const skip = (pageNumber - 1) * limitNumber;
		const comments = await Comment.find({ postId }).skip(skip).limit(limitNumber).exec();

		const response = {
			comments,
			totalComments,
			totalPages,
			currentPage: pageNumber,
		};

		res.status(200).json(handleResponse(response, 200, "Comments fetched successfully"));
	} catch (error) {
		next(error);
	}
}

// get comment by id
export async function getCommentById(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;

	try {
		const comment = await Comment.findById(id);
		if (!comment) throw new Error("Comment not found");

		res.status(200).json(handleResponse(comment, 200, `Comment -${id} fetched successfully`));
	} catch (error) {
		next(error);
	}
}
