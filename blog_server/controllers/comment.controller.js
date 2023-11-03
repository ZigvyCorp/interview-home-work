const asyncHandler = require("express-async-handler");
const Comment = require("../models/comment.model");

const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find();
  res.status(201).json(comments);
});

module.exports = { getComments };
