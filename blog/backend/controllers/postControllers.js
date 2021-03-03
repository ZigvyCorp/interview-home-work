import asyncHander from 'express-async-handler';
import Post from '../models/postModel.js';
import Comment from '../models/commentModel.js';

// @desc Fetch all posts
// @route GET /api/posts
// @access Public
const getPosts = asyncHander(async (req, res) => {
  const pageSize = 3;
  const page = +req.query.pageNumber || 1;

  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Post.countDocuments({ ...keyword });
  const posts = await Post.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ posts, page, pages: Math.ceil(count / pageSize) });
});

// @desc Fetch single post by id
// @route GET /api/posts/:id
// @access Public
const getPostById = asyncHander(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    throw new Error('Post not found!');
  }
});

// @desc Fetch all comments of a specific post
// @route GET /api/posts/:id/comments
// @access Public
const getCommentsByPostId = asyncHander(async (req, res) => {
  const comments = await Comment.find({ post: req.params.id });
  res.json(comments);
});

export { getPosts, getCommentsByPostId, getPostById };
