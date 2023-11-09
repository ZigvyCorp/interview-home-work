const postsRepo = require("../repositories/posts.repository");
const commentsRepo = require("../repositories/comments.repository");

// TODO: will need proper validation if this is production code
const getPosts = (page = 1, size = 10, search = "") => {
	return postsRepo.getPosts(page, size, search);
};

const getPostById = (id) => {
	return postsRepo.getPostById(id);
};

const getPostCommentsByPostId = (id) => {
	return commentsRepo.getCommentsByPost(id);
};

module.exports = {
	getPosts,
	getPostById,
	getPostCommentsByPostId,
};
