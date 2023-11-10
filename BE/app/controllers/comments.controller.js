// controllers/commentController.js
const CommentModel = require("../models/comment.model");

exports.getAllComments = (req, res) => {
  const postId = parseInt(req.query.postId);

  if (postId) {
    const comments = CommentModel.getCommentsByPostId(postId);

    if (comments.length > 0) {
      res.json(comments);
    } else {
      res
        .status(404)
        .json({ error: "Comments not found by post ID" });
    }
  } else {
    const allComments = CommentModel.getAllComments();
    res.json(allComments);
  }
};

exports.getCommentsForPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const comments = CommentModel.getCommentsByPostId(postId);

  if (comments.length > 0) {
    res.json(comments);
  } else {
    res
      .status(404)
      .json({ error: "Comments not found by post ID" });
  }
};

exports.getCommentById = (req, res) => {
  const commentId = parseInt(req.params.id);
  const comment = CommentModel.getCommentById(commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: "Comment not found" });
  }
};

exports.addComment = (req, res) => {
  const newComment = req.body;
  CommentModel.addComment(newComment);
  res.status(201).json(newComment);
};

exports.updateComment = (req, res) => {
  const updatedComment = req.body;
  CommentModel.updateComment(updatedComment);
  res.json(updatedComment);
};

exports.deleteComment = (req, res) => {
  const commentId = parseInt(req.params.id);
  CommentModel.deleteComment(commentId);
  res.status(204).send();
};
