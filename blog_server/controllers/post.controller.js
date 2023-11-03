const asyncHandler = require("express-async-handler");
const Comment = require("../models/comment.model");
const Post = require("../models/post.model");

const getPosts = asyncHandler(async (req, res) => {
  const pageSize = +req.query._page;
  const limit = +req.query._limit;
  const keyword = req.query._keyword ?? "";

  let condition = {};
  if (keyword && keyword.length > 0) {
    condition = { title: { $regex: keyword, $options: "i" } };
  }

  const posts = await Post.find(condition)
    .limit(limit)
    .skip(limit * (pageSize - 1));

  const totalRows = await Post.find(condition).countDocuments({});

  res.status(201).json({
    data: posts,
    pagination: {
      _page: pageSize,
      _limit: limit,
      _totalRows: totalRows,
    },
  });
});

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findOne({ id: req.params.id });
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({
      statusCode: 404,
      message: "Post not found",
    });
  }
});

const getCommentsForPost = asyncHandler(async (req, res) => {
  const post = await Post.findOne({ id: req.params.id });
  if (post) {
    const comments = await Comment.find({ post: req.params.id });
    res.json(comments);
  } else {
    res.status(404).json({
      statusCode: 404,
      message: "Post not found",
    });
  }
});

module.exports = { getPosts, getPostById, getCommentsForPost };
