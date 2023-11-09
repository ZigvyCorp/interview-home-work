import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { Post, User } from "../models";
import { IPostJS, IUser } from "../types";
import { generateRandomTags, handleError, handleResponse } from "../utils";

// get posts from jsonplaceholder and save to db
export async function getPostFromJsonPlaceholderAndSaveToDb(req: Request, res: Response) {
	try {
		const { data } = await axios.get(`${process.env.MOCK_API_URL}/posts`);
		const posts: IPostJS[] = data;
		const users = await User.find();

		posts.forEach(async (post) => {
			const newPost = new Post(post);
			newPost.jsonId = post.id;
			newPost.tags = generateRandomTags();
			newPost.authorId = users.find((user: IUser) => user.jsonId === post.userId)._id;
			await newPost.save();
		});

		res.status(200).json(handleResponse(posts, 200, "Posts fetched successfully"));
	} catch (error) {
		handleError(error, 500);
	}
}

// get all -post
export async function getAllPostsWithAuthorIdAndTitle(req: Request, res: Response, next: NextFunction) {
	const { page, limit, title } = req.query;
	const pageNumber = +page || +process.env.PAGE_NUMBER;
	const limitNumber = +limit || +process.env.LIMIT_NUMBER;

	try {
		let query = {};

		if (title) {
			query = { title: { $regex: title as string, $options: "i" } };
		}

		const totalPosts = await Post.countDocuments(query);
		const totalPages = Math.ceil(totalPosts / limitNumber);

		const skip = (pageNumber - 1) * limitNumber;
		const posts = await Post.find(query).skip(skip).limit(limitNumber).populate("authorId");

		const response = {
			posts,
			totalPosts,
			totalPages,
			currentPage: pageNumber,
		};

		res.status(200).json(handleResponse(response, 200, "Posts fetched successfully"));
	} catch (error) {
		next(error);
	}
}

// get post by id
export async function getPostById(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;

	try {
		const post = await Post.findById(id).populate("authorId");
		if (!post) throw new Error("Post not found");

		res.status(200).json(handleResponse(post, 200, `Post -${id} fetched successfully`));
	} catch (error) {
		next(error);
	}
}
