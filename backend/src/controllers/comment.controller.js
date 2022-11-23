const catchAsync = require("../utils/catchAsync");
const commentServices = require("../services/comment.service");

const getComments = catchAsync(async (req, res, next) => {
  let comments = await commentServices.getComments(req.query.postId);
  res.json({
    data: comments,
  });
});

const createComment = catchAsync(async (req, res, next) => {
  let comment = await commentServices.createComment(req.user._id, req.body);
  let getComment = await commentServices.getCountCommentById(comment._id);
  res.json({
    data: getComment,
  });
});

module.exports = {
  getComments,
  createComment,
};
