const commentModel = require("../models/comment.model");
const postServices = require("./post.service");
/**
 * @param  {ObjectId} owner
 * @param  {PostModel} body
 * @return {Promise<CommentModel>}
 */
const createComment = async (owner, body) => {
  await postServices.checkPostIsExist(body.post);
  const comment = await commentModel.create({ ...body, owner });
  await postServices.increaseCommentCount(comment);
  return comment;
};

/**
 * @param  {ObjectId} postId
 * @return {Promise<[CommentModel]>}
 */
const getComments = async (postId) => {
  const comments = await commentModel.find({ post: postId });
  return comments;
};

/**
 * @param  {ObjectId} postId
 * @return {Promise<Number>}
 */
const getCountCommentsOfPost = async (postId) => {
  const count = await commentModel.count({ post: postId });
  return count;
};

/**
 * @param  {ObjectId} postId
 * @return {Promise<Number>}
 */
const getCountCommentById = async (id) => {
  const count = await commentModel.findById(id).populate("owner","-password");
  return count;
};

module.exports = {
  createComment,
  getComments,
  getCountCommentsOfPost,
  getCountCommentById,
};
