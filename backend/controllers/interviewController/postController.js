const Post = require('../../models/interviewModals/postModel');
// const AppError = require('../../utils/appError');
// const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post, { path: 'owner' });
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);
