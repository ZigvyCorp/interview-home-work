import Comment from "../models/comment.model.js";
import createError from "../utils/createError.js";

export const deleteComment = async (req, res, next) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account has been deleted.");
  } catch (error) {
    next(error);
  }
};
export const getComment = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  res.status(200).send(comment);
};
export const getComments = async (req, res, next) => {
  const comment = await Comment.find();
  res.status(200).send(comment);
};
export const createComment = async (req, res, next) => {
  const newComment = new Comment({
    post: req.post,
    owner: req.owner,
    ...req.body,
  });
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    next(err);
  }
};

export const updateComment = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if (req.commentId !== comment._id.toString()) {
    return next(createError(403, "Bạn chỉ được cập nhật tài khoản của bạn!"));
  }
  await Comment.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send("Tài khoản của bạn đã được cập nhật!");
};
