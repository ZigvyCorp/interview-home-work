import Comment from '../models/Comment.js';

export const getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const createComment = async (req, res, next) => {
  const {owner, post, content} = req.body;
  try {
    const comments = await Comment({owner, post, content}).save();
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
}