import catchAsyncError from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utills/errorHandle.js";
import { PostModel, UserModel, CommentModel } from "../models/index.js";
import mongoose from "mongoose";

export const getCommentByPost = catchAsyncError(async (req, res, next) => {
  const post = await PostModel.findById(req.params.id);
  const comments = await CommentModel.find({ post: post._id }).populate(
    "owner"
  );

  const commentFill = comments.map((comment) => ({
    _id: comment._id,
    owner: {
      _id: comment.owner._id,
      username: comment.owner.username,
      createdAt: comment.owner.createdAt,
      updatedAt: comment.owner.updatedAt,
    },
    post: comment.post,
    content: comment.content,
    createdAt: comment.createdAt,
  }));

  res.status(200).json({
    commentFill,
    message: "get comments by post successfully",
    success: true,
  });
});

export const getComments = catchAsyncError(async (req, res, next) => {
  const comments = await CommentModel.find().populate("owner");

  const commentFill = comments.map((comment) => ({
    _id: comment._id,
    owner: {
      _id: comment.owner._id,
      username: comment.owner.username,
      createdAt: comment.owner.createdAt,
      updatedAt: comment.owner.updatedAt,
    },
    post: comment.post,
    content: comment.content,
    createdAt: comment.createdAt,
  }));

  res.status(200).json({
    commentFill,
    message: "get comments by post successfully",
    success: true,
  });
});

export const createComment = catchAsyncError(async (req, res, next) => {
  const user = await UserModel.findById(req.body.owner);
  if (!user) return next(new ErrorHandler("Not found user...", 404));
  const post = await PostModel.findById(req.body.post);
  if (!post) return next(new ErrorHandler("Not found post...", 404));

  delete user.password;
  delete user.dob;

  const newComment = await CommentModel.create({
    owner: user,
    post: post._id,
    content: req.body.content,
  });

  res.status(200).json({
    newComment,
    success: true,
    message: "Create comment successfully!!!",
  });
});
export const updateComment = catchAsyncError(async (req, res, next) => {
  const newComment = {
    content: req.body.content,
  };
  const comment = await CommentModel.findByIdAndUpdate(
    req.params.id,
    newComment,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    comment,
    success: true,
    message: "Update comment successfully!!!",
  });
});

export const deleteComment = catchAsyncError(async (req, res, next) => {
  const comment = await CommentModel.findById(req.params.id);
  if (!comment) return next(new ErrorHandler("Comment not found...", 404));

  const { postId } = comment;
  const post = await PostModel.findById(postId);
  if (!post) return next(new ErrorHandler("Post not found...", 404));

  const isAuthorized =
    req.user.id === post.owner || req.user.id === comment.owner;

  if (!isAuthorized) {
    return next(new ErrorHandler("Unauthorized to delete comment", 401));
  }

  await CommentModel.findByIdAndDelete(comment.id);

  res.status(200).json({
    message: "Comment deleted successfully",
  });
});
