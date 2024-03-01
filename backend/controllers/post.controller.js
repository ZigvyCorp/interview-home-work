const postService = require("../services/post.service");
const { commentsView } = require("../views/comment.view");
const { postsView, postView } = require("../views/post.view");

module.exports = { getPosts, getById, getComments, addPost, updatePost, deletePost};

function getPosts(_req, _res, _next) {
	const { _start, _limit, title_like } = _req.query;
	postService
		.getPosts(_start, _limit, title_like)
		.then((posts) => _res.json(postsView(posts)))
		.catch(_next);
}

function getById(_req, _res, _next) {
	postService
		.getById(_req.params.id)
		.then((post) => (post ? _res.json(postView(post)) : _res.sendStatus(404)))
		.catch(_next);
}

function addPost(_req, _res, _next) {
	postService
		.addPost(_req.body)
		.then((_post) => _res.sendStatus(201))
		.catch(_next);
}

function updatePost(_req, _res, _next) {
	postService
		.updatePost(_req.params.id, _req.body)
		.then((post) => (post ? _res.json(postView(post)) : _res.sendStatus(404)))
		.catch(_next);
}

function deletePost(_req, _res, _next) {
  postService
    .deletePost(_req.params.id)
    .then(() => _res.sendStatus(204))
    .catch(_next);
}

function getComments(_req, _res, _next) {
	postService
		.getComments(_req.params.id)
		.then((comments) => _res.json(commentsView(comments)))
		.catch(_next);
}
