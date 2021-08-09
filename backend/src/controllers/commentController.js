import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import PostModel from '../models/postModel.js';
import CommentModel from '../models/commentModel.js';

//@desc 	add comment
//@route	POST /api/comments/
//@access private
export const addComment = asyncHandler(async (req, res) => {
	const { post: postId, content } = req.body;

	if (!mongoose.Types.ObjectId.isValid(req.currentUser.id)) {
		res.status(401);
		throw new Error('not authorized');
	}

	const post = await PostModel.findById(postId);
	if (!post) {
		res.status(404);
		throw new Error('post not found');
	}

	const comment = await CommentModel.create({
		owner: req.currentUser.id,
		post: post.id,
		content,
	});

	if (comment) {
		res.status(201).json(comment);
	} else {
		res.status(400);
		throw new Error('cant create add new comment')
	}
});

//@desc 	get all comment and by post id
//@route 	GET /api/comments
//@access public
export const getCommentsList = asyncHandler(async (req, res) => {
	const postId = req.query.postid;
	if (postId) {
		const commentsByPostid = await CommentModel.find({
			post: postId
		});
		return res.json(commentsByPostid);
	}

	const comments = await CommentModel.find({});
	res.json(comments);
})
