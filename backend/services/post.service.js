const Post = require("../models/post.model");
const commentService = require("./comment.service");

module.exports = {
	getPosts,
	getById,
	getComments,
	addPost,
	updatePost,
	deletePost,
};

function getPosts(skip = 0, limit = 10, title = "") {
	return Post.find({ title: { $regex: title, $options: "i" } })
		.skip(skip)
		.limit(limit)
		.lean();
}

function getById(id) {
	return Post.findById(id).lean();
}

function getComments(id) {
	return commentService.getCommentsByPost(id);
}

function addPost(post) {
	return Post.create({ ...post, created_at: new Date() });
}

function updatePost(id, post) {
	return Post.findByIdAndUpdate(
		id,
		{ ...post, updated_at: new Date() },
		{ new: true }
	).lean();
}

function deletePost(id) {
	return Post.findByIdAndDelete(id).then((_) =>
		commentService.deleteCommentsByPost(id)
	);
}
