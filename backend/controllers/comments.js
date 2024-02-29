const asyncHandler = require("express-async-handler");
const Comment = require("../models/comment");

const getCommentsByPostId = asyncHandler(async (req, res) => {
  try {
    const { bid } = req.params; // get postId from request parameters

    // get all comments by bid
    const comments = await Comment.find({ post: bid }).populate(
      "owner",
      "username"
    );

    return res.status(200).json({
      success: true,
      message: "Get comments by post id successfully",
      data: comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get comments by post id",
      error: error.message,
    });
  }
});

const getCommentCountByPostId = asyncHandler(async (req, res) => {
  try {
    const { bid } = req.params; // get postId from request parameters

    // count comment in a post
    const commentCount = await Comment.countDocuments({ post: bid });

    return res.status(200).json({
      success: true,
      message: "Get comment count by post id successfully",
      data: { commentCount },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get comment count by post id",
      error: error.message,
    });
  }
});

module.exports = { getCommentsByPostId, getCommentCountByPostId };
