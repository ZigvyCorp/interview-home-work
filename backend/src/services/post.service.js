const httpStatus = require("http-status");
const postModel = require("../models/post.model");
const ApiError = require("../utils/ApiError");

/**
 * @param  {ObjectId} owner
 * @param  {PostModel} body
 * @return {Promise<PostModel>}
 */
const createPost = async (owner, body) => {
  const post = await postModel.create({ ...body, owner });
  return post;
};

/**
 * @param  {ObjectId} owner
 * @param  {ObjectId} postId
 * @param  {PostModel} body
 * @return {Promise<PostModel>}
 */
const updatePost = async (owner, postId, body) => {
  if (await checkOwnership(owner, postId))
    throw new ApiError(httpStatus.FORBIDDEN, "you is not owner of this post");
  const post = await postModel.findByIdAndUpdate(postId, body);
  return post;
};

/**
 * @param  {ObjectId} id
 * @param  {PostModel} body
 * @return {Promise<[<PostModel>]>}
 */
const getPosts = async () => {
  const post = await postModel.find({});
  return post;
};

/**
 * @param  {ObjectId} id
 * @param  {PostModel} body
 * @return {Promise<PostModel>}
 */
const getPostById = async (id) => {
  const post = await postModel.findById(id);
  return post;
};

/**
 * @param  {ObjectId} owner
 * @param  {ObjectId} id
 * @return {Promise<PostModel>}
 */
const deletePost = async (owner, id) => {
  if (await checkOwnership(owner, id))
    throw new ApiError(httpStatus.NOT_FOUND, "you is not owner of this post");
  const post = await postModel.findByIdAndDelete(id);
  return post;
};

/**
 * @param  {ObjectId} owner
 * @param  {ObjectId} id
 * @return {Promise<PostModel>}
 */
const checkOwnership = async (owner, id) => {
  const post = await postModel.findById(id);
  if (!post) throw new ApiError(httpStatus.NOT_FOUND, "Post not found");
  if (post.owner.toString() === owner) return true;
  return false;
};

module.exports = {
  createPost,
  updatePost,
  getPosts,
  getPostById,
  deletePost,
};
