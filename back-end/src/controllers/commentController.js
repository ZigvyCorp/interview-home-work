const { CommentService } = require("../services");

const services = new CommentService();
const createComment = async (req, res, next) => {
  try {
    const { owner, post, content } = req.body;

    await services.create({ ownerId: owner, postId: post, content });

    res.status(200).json("Create Comment Successful");
  } catch (error) {
    next(error);
  }
};
const findComments = async (req, res, next) => {
  try {
    const comments = await services.find();

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
const findCommentById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const existedComment = await services.findById({ id });

    res.status(200).json(existedComment);
  } catch (error) {
    next(error);
  }
};
const findCommentsByPostId = async (req, res, next) => {
  try {
    const id = req.params.id;

    const existedComment = await services.findByPostId({ id });

    res.status(200).json(existedComment);
  } catch (error) {
    next(error);
  }
};
const updateCommentById = async (req, res, next) => {
  try {
    const { commentId, ownerId, postId, content } = req.body;
    await services.update({ commentId, ownerId, postId, content });

    res.status(200).json("Update Comment Successful");
  } catch (error) {
    next(error);
  }
};
const deleteCommentById = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const existedComment = await services.deleteById({ id });

    res.status(200).json(existedComment);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createComment,
  findCommentById,
  findComments,
  updateCommentById,
  deleteCommentById,
  findCommentsByPostId,
};
