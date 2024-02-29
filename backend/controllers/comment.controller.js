const commentService = require("../services/comment.service");
const { commentsView, commentView } = require("../views/comment.view");

module.exports = {
	getComments,
	addComment,
	updateComment,
	deleteComment,
	getCommentById,
};

async function getComments(_req, _res, _next) {
	const { postId } = _req.query;
	try {
		const comments = postId
			? await commentService.getCommentsByPost(postId)
			: await commentService.getComments();
		return _res.json(commentsView(comments));
	} catch (error) {
		_next(error);
	}
}

function getCommentById(_req, _res, _next) {
	return commentService
		.getCommentById(_req.params.id)
		.then((comment) =>
			comment ? _res.json(commentView(comment)) : _res.sendStatus(404)
		)
		.catch(_next);
}

function addComment(_req, _res, _next) {
	return commentService
		.addComment(_req.body)
		.then((_comment) => _res.sendStatus(201))
		.catch(_next);
}

function updateComment(_req, _res, _next) {
	return commentService
		.updateComment(_req.params.id, _req.body)
		.then((comment) =>
			comment ? _res.json(commentView(comment)) : _res.sendStatus(404)
		)
		.catch(_next);
}

function deleteComment(_req, _res, _next) {
	return commentService
		.deleteComment(_req.params.id)
		.then(() => _res.sendStatus(204))
		.catch(_next);
}
