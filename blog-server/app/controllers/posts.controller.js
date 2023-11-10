const postsService = require("../services/posts.service");

exports.getPosts = async (req, res) => {
	const { page, size, search = "" } = req.query;
	try {
		const posts = await postsService.getPosts(
			Number(page) || 1,
			Number(size) || 10,
			search
		);

		res.status(200).send(posts);
	} catch (err) {
		res.status(500).send({
			error: err.message,
		});
	}
};

exports.getById = async (req, res) => {
	const { postId } = req.params;
	try {
		const post = await postsService.getPostById(postId);
		if (!post) {
			res.status(404).send({ error: "Post not found" });
		} else {
			res.status(200).send(post);
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

exports.getCommentByPostId = async (req, res) => {
	const { postId } = req.params;
	try {
		const comments = await postsService.getPostCommentsByPostId(postId);
		res.status(200).send(comments);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};
