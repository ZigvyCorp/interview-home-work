import catchAsyncError from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utills/errorHandle.js";
import { PostModel, UserModel } from "../models/index.js";

export const getPosts = catchAsyncError(async (req, res, next) => {
  const posts = await PostModel.find().populate("owner");

  res.status(200).json({
    posts,
    message: "get post successfully",
    success: true,
  });
});

export const createPost = catchAsyncError(async (req, res, next) => {
  const userId = req.body.owner;
  const user = await UserModel.findById(userId);
  if (!user) return next(new ErrorHandler("Not found user...", 404));

  const newPost = await PostModel.create({
    title: req.body.title,
    owner: user._id,
    content: req.body.content,
    tags: req.body.tags,
  });

  res.status(200).json({
    newPost,
    success: true,
    message: "Create posts successfully!!!",
  });
});
export const updatePost = catchAsyncError(async (req, res, next) => {
  const newPost = {
    content: req.body.content,
    tags: req.body.tags,
  };
  const post = await PostModel.findByIdAndUpdate(req.params.id, newPost, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    post,
    success: true,
    message: "Update post successfully!!!",
  });
});
export const getPostId = catchAsyncError(async (req, res, next) => {
  const post = await PostModel.findById(req.body.id);
  if (!post) return next(new ErrorHandler("Not found post...", 404));

  res.status(200).json({
    post,
    success: true,
    message: "Get post by id successfully!!!",
  });
});

export const deletePost = catchAsyncError(async (req, res, next) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) return next(new ErrorHandler("Not found category...", 404));

  res.status(200).json({
    post,
    success: true,
    message: "deleted post successfully!!!",
  });
});
