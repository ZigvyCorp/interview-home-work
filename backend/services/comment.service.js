const Comment = require("../models/comment.model");

module.exports = {
	getComments,
	getCommentById,
	getCommentsByPost,
	addComment,
	deleteComment,
	updateComment,
	deleteCommentsByPost,
};

function getComments() {
	return Comment.find().lean();
}

function getCommentById(id) {
	return Comment.findById(id).lean();
}

function getCommentsByPost(postId) {
	return Comment.find({ post: postId })
		.populate("owner", ["name", "username"])
		.lean();
}

function addComment(comment) {
	return Comment.create({ ...comment, created_at: new Date()});
}

function deleteComment(id) {
	return Comment.findByIdAndDelete(id);
}

function updateComment(id, comment) {
	return Comment.findByIdAndUpdate(id, { ...comment, updated_at: new Date()}, { new: true }).lean();
}

function deleteCommentsByPost(postId) {
	return Comment.deleteMany({ post: postId });
}
