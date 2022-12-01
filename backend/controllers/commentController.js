const Comment = require("../models/commentModel");

exports.createComment = async (req, res, next) => {
  try {
    const { userId, postId, content } = req.body;
    if (!userId || !postId || !content) {
      const err = new Error("Can't create comment");
      err.statusCode = 404;
      throw err;
    }
    const newComment = new Comment({ owner: userId, post: postId, content });
    const result = await newComment.save();
    res.status(200).json({
      message: "Create comment successfully",
      comment: result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCommentByPostId = async (req, res, next) => {
  try {
    const { PostId } = req.query;
    if (!PostId) {
      return res.status(400).json({
        status: "error",
        message: "Can't fetch comment",
        data: {},
      });
    }
    const comments = Comment.find({ post: PostId }).populate("owner");

    res.status(200).json({
      status: "success",
      message: "Get comments in post successfully",
      data: comments,
    });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
