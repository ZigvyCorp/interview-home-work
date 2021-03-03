import asyncHander from 'express-async-handler';
import Post from '../models/postModel.js';
import Comment from '../models/commentModel.js';

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
const getPosts = asyncHander(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const posts = await Post.find({ ...keyword });
  res.json(posts);
});

// @desc Fetch all comments of a specific post
// @route GET /api/posts/:id/comments
// @access Public
const getCommentsByPostId = asyncHander(async (req, res) => {
  const comments = await Comment.find({ post: req.params.id });
  res.json(comments);
});

export { getPosts, getCommentsByPostId };
