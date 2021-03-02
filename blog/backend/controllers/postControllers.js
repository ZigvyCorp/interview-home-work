import asyncHander from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc Fetch all posts
// @route GET /api/posts
// @access public
const getPosts = asyncHander(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

export { getPosts };
