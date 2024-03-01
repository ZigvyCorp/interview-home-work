import { CommentModel } from "../models/comment.model.js";

export const handleGetComment = async (req, res, next) => {
  try {
    const comments = await CommentModel.getComments();
    res.status(200).json({ data: comments });
  } catch (error) {
    next(error);
  }
};
