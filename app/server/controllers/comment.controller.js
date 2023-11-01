const Comment = require("../models/comment.schema");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("../utils/handlerFactory");

exports.getListByPostId = catchAsync(async (req, res, next) => {
  const postId = req.params.postId;
  if (!postId) {
    return res.status(400).send(new AppError("Missing postId!", 400));
  }
  try {
    const results = await Comment.find({ postId });

    return res.json({
      status: true,
      message: "Success",
      data: {
        list: results,
      },
    });
  } catch (error) {
    return res.status(400).send(new AppError("Get posts failed!", 400));
  }
});

exports.getOne = factory.getOne(Comment);
exports.create = factory.createOne(Comment);
exports.update = factory.updateOne(Comment);
exports.delete = factory.deleteOne(Comment);
