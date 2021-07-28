import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import CommentModel from '../models/commentModel.js';
import PostModel from '../models/postModel.js';

//@desc		create a new post
//@route	POST /api/posts
//@access private
export const createPost = asyncHandler(async (req, res) => {
	const { title, content, tags } = req.body;

	const post = await PostModel.create({
		owner: req.currentUser.id,
		title,
		content,
		tags,
	});

	if (post) {
		res.status(201).json(post);
	} else {
		res.status(400);
		throw new Error('cant create a new post');
	}
})

//@desc 	get posts list
//@route 	GET /api/posts
//@access public
export const getPostsList = asyncHandler(async (req, res) => {
	const posts = await PostModel.find({});
	res.json(posts);
})

//@desc 	get post
//@route 	GET /api/posts/:id
//@access	public
export const getPost = asyncHandler(async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(404);
		throw new Error('posts not found');
	}

	const post = await PostModel.findById(req.params.id);
	res.json(post)
})

//@desc 	update post
//@route 	PUT /api/posts/:id
//@access	private
export const updatePost = asyncHandler(async (req, res) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(404);
		throw new Error('invalid post id');
	}

	const post = await PostModel.findById(req.params.id);
	if (post) {
		if (post.owner + '' !== req.currentUser.id) {
			res.status(401);
			throw new Error('not authorized');
		}

		post.title = req.body.title;
		post.content = req.body.content;
		post.tags = req.body.tags;

		const updatedPost = await post.save();
		res.status(201).send(updatedPost);
	} else {
		res.status(404);
		throw new Error('post not found')
	}
})

//@desc 	get comments in post
//@route 	GET /api/posts/:id/comments
//@access public
export const getCommentsByPostid = asyncHandler(async (req, res) => {
	const postId = req.params.id;

	const post = await PostModel.findById(postId);
	if (!post) {
		res.status(404);
		throw new Error('post not found');
	}

	const commentsByPostid = await CommentModel.find({
		post: postId
	});
	res.json(commentsByPostid);
})