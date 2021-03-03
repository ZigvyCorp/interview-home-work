import asyncHander from 'express-async-handler';
import Comment from '../models/commentModel.js';

// @desc Fetch all comments or all comments with post id
// @route GET /api/comments
// @access public
const getComments = asyncHander(async (req, res) => {
  const property = req.query.postId ? { post: req.query.postId } : {};

  const comments = await Comment.find(property);
  res.json(comments);
});

export { getComments };
