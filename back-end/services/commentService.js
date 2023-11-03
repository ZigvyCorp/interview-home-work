import Comment from '../models/commentModel.js';

export const getAllComment = async () => {
  try {
    const comments = await Comment.find();
    return comments;
  } catch (error) {
    return error;
  }
};

export const getComment = async (commentId) => {
  try {
    return await Comment.findOne({ _id: commentId });
  } catch (error) {
    return error;
  }
};

export const createComment = async (comment) => {
  try {
    const { postId, userId, body } = comment;
    const newComment = new Comment({ postId, userId, body });
    return await newComment.save();
  } catch (error) {
    return error;
  }
};

export const updateComment = async (commentId, comment) => {
  try {
    const newComment = await Comment.findOneAndUpdate(
      { _id: commentId },
      { $set: comment },
      { new: true }
    );
    return newComment;
  } catch (error) {
    return error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const comment = await Comment.findOneAndDelete({ _id: commentId });
    return comment;
  } catch (error) {
    return error;
  }
};
