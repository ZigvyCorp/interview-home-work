import HttpStatusCodes from "http-status-codes"
import { Request, Response } from "express"
import Post from "../models/Post"

export const getAllPosts = async (req: Request, res: Response) => {
	console.log("getAllPosts");
	try {
		const posts = await Post.find().sort({ createdAt: -1 })
		res.status(HttpStatusCodes.OK).json(posts);
	} catch (err) {
		res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err);
	}
};