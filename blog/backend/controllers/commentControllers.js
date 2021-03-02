import asyncHander from 'express-async-handler';
import Comment from '../models/commentModel.js';

// @desc Fetch all comments
// @route GET /api/comments
// @access public
const getComments = asyncHander(async (req, res) => {
  const comments = await Comment.find({});
  res.json(comments);
});

export { getComments };
