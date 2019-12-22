const Post = require('./../models/postModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
exports.setPostAuthor = (req, res, next) => {
  if(!res.locals.user) {
    return next(
      new AppError('You are not login! Please log in to get access', 401)
    )
  }
  req.body.author = res.locals.user._id;
  next();
};

exports.isPostAuthor = catchAsync(async (req, res, next) => {
  if(!res.locals.user) {
    return next(
      new AppError('You are not login! Please log in to get access', 401)
    )
  }

  const doc = await Post.findById(req.params.id);
  
  if (!doc) {
    return next(
      new AppError('No document found with that ID', 404)
    );
  }

  if(!doc.isAuthor(res.locals.user._id)) {
    return next(new AppError('You are not the author of this post', 401))
  }
  next();
})

