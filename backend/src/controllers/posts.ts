import HttpStatusCodes from "http-status-codes"
import { Request, Response } from "express"
import Post from "../models/Post"
import User from "../models/User"

export const getAllPosts = async (req: Request, res: Response) => {
	console.log("getAllPosts");
	try {
		const posts = await Post.find();
		res.status(HttpStatusCodes.OK).json(posts);
	} catch (err) {
		res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err);
	}
};

export const search = async (req: Request, res: Response) => {
	try {
		const post = req.query.post;

		const postSearch = await User.find({ post: { $regex: post } })
			.limit(10)
			.select("title")
			.exec();
		return res.status(HttpStatusCodes.OK).json(postSearch);
	} catch (err) {
		return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err);
	}
};