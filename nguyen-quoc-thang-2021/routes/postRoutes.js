const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const PostBlog = require('../models/posts');
const Comment = require('../models/comments');

router.get(
  '/',
  catchAsync(async (req, res) => {
    const posts = await PostBlog.find({}).populate('userId');

    res.render('blog/index', { posts });
  })
);

router.get(
  '/post/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params;

    const post = await PostBlog.findById(id).populate('userId');

    res.render('blog/show', { post });
  })
);

module.exports = router;
