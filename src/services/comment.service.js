import { Comment } from "../models/index.js";

const getComments = async (filters) => {
	const { ownerId, postId } = filters;
	let filterObject = {};

	if (ownerId) {
		filterObject.owner = ownerId;
	}

	if (postId) {
		filterObject.post = postId;
	}

	const page = Number(filters.page) || 1;
	const limit = Number(filters.size) || 10;
	const skip = (page - 1) * limit;

	let comments = await Comment.find(filterObject).select("-password -otp").skip(skip).limit(limit);

	return { comments, page, size: limit, totalComments: comments.length };
};

const getCommentsByPostId = async (id) => {
	return Comment.find({ post: id });
};

const commentService = {
	getComments,
	getCommentsByPostId,
};

export default commentService;
