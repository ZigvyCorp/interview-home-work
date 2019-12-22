const Comment = require('./../models/commentModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllComments = factory.getAll(Comment);
exports.getComment = factory.getOne(Comment);
exports.createComment = factory.createOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);

exports.setPostAndUserIds = function(req, res, next) {
  if (!req.body.post) req.body.post = req.params.postId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
}

exports.isCommentAuthor = catchAsync(async (req, res, next) => {
  if(!res.locals.user) {
    return next(
      new AppError('You are not login! Please log in to get the right.', 401)
    )
  }

  const doc = await Comment.findById(req.params.id);
  
  if (!doc) {
    return next(
      new AppError('No comment found with that ID', 404)
    );
  }

  if(!doc.isAuthor(res.locals.user._id)) {
    return next(new AppError('You are not the author of this comment', 401))
  }
  next();
})