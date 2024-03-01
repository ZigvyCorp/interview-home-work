const CommentModel = require('../Models/CommentModel');
const { verifyToken } = require('./AuthController');

async function getCommentsByBlogId(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const blogId = req.params.blogId;

  try {
    const comments = await CommentModel.find({ post: blogId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function getAll(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  try {
    const comments = await CommentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function getCommentByCommentId(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  const commentId = req.params.commentId;

  try {
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json('Comment not found');
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function updateComment(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  const commentId = req.params.commentId;
  const updateFields = req.body;

  try {
    const updatedComment = await CommentModel.findByIdAndUpdate(
      commentId,
      updateFields,
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json('Comment not found');
    }
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function deleteComment(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const commentId = req.params.commentId;
  try {
    const deletedComment = await CommentModel.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json('Comment not found');
    }
    res.status(200).json('Comment deleted successfully');
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function createComment(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  const { post, owner, content } = req.body;

  try {
    const newComment = new CommentModel({ post, owner, content });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = {
  getCommentsByBlogId,
  getAll,
  getCommentByCommentId,
  updateComment,
  deleteComment,
  createComment,
};
