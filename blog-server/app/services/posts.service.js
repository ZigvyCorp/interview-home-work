const postsRepo = require("../repositories/posts.repository");
const commentsRepo = require("../repositories/comments.repository");

// TODO: will need proper validation if this is production code
const getPosts = async (page = 1, size = 10, search = "") => {
	const postCountReq =  postsRepo.countPosts(search);
	const postDataReq = postsRepo.getPosts(page, size, search);

	const [count, posts] = await Promise.all([postCountReq, postDataReq]);
	return {
		page: page,
		size: size,
		search: search,
		total: count,
		posts: posts,
	}
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
