const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const PostBlog = require('../models/posts');

router.get(
  '/search',
  catchAsync(async (req, res) => {
    const { search } = req.query;

    const posts = await PostBlog.find({ title: { $regex: search } }).populate(
      'userId'
    );
    if (search) {
      res.render('blog/search', { posts });
    } else {
      res.redirect('/');
    }
  })
);

module.exports = router;
