import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { RequestWithUser } from "../middlewares/auth";
import { Post, User } from "../models";
import { IPostJS, IUser } from "../types";
import { formatFirstWord, generateRandomTags, handleError, handleResponse, normalizedTitle } from "../utils";

// get posts from jsonplaceholder and save to db
export async function getPostFromJsonPlaceholderAndSaveToDb(req: Request, res: Response) {
	try {
		const { data } = await axios.get(`${process.env.MOCK_API_URL}/posts`);
		const posts: IPostJS[] = data;
		const users = await User.find();

		posts.forEach(async (post) => {
			const newPost = new Post(post);
			newPost.jsonId = post.id;
			newPost.title = formatFirstWord(post.title);
			newPost.body = formatFirstWord(post.body);
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
		const posts = await Post.find(query)
			.skip(skip)
			.limit(limitNumber)
			.populate("authorId")
			.sort({ createdAt: -1 });
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

// create post
export async function createPost(req: Request, res: Response, next: NextFunction) {
	const { title, body, tags } = req.body;
	const { user } = req as RequestWithUser;
	const normalTitle = formatFirstWord(title);

	try {
		if (!user) throw new Error("Please login to create post");

		const isExist = await Post.findOne({ normalTitle });
		if (isExist) throw new Error("Post already exist");

		const author = await User.findById(user._id);
		if (!author) throw new Error("User not found");

		const newPost = new Post({
			jsonId: (await Post.countDocuments()) + 1,
			title: normalTitle,
			body,
			authorId: author,
			tags,
		});
		await newPost.save();

		res.status(201).json(handleResponse(newPost, 201, "Post created successfully"));
	} catch (error) {
		next(error);
	}
}

// update post
export async function updatePost(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;
	const { title, body, authorId } = req.body;
	const normalTitle = normalizedTitle(title);

	try {
		const post = await Post.findById(id);
		if (!post) {
			throw new Error("Post not found");
		}

		const isExistTitle = Post.findOne({ normalTitle });
		if (isExistTitle) throw new Error("Post already exist");

		Object.assign(post, { normalTitle, body, authorId });

		await post.save();
		res.status(200).json(handleResponse(post, 200, "Post updated successfully"));
	} catch (error) {
		next(error);
	}
}

// delete post
export async function deletePost(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;

	try {
		const post = await Post.findById(id);
		if (!post) {
			throw new Error("Post not found");
		}

		await post.remove();
		res.status(200).json(handleResponse(post, 200, "Post deleted successfully"));
	} catch (error) {
		next(error);
	}
}
