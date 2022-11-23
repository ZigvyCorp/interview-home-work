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
const getPosts = async (postQuery) => {
  const post = await postModel
    .find({})
    .limit(postQuery.limit)
    .skip(postQuery.limit * postQuery.page)
    .populate("owner", "-password")
    .populate({
      path: "comments",
      populate: {
        path: "owner",
      },
    })
    .sort({ createdAt: -1 });
  return post;
};

/**
 * @param  {ObjectId} id
 * @param  {PostModel} body
 * @return {Promise<PostModel>}
 */
const getPostById = async (id) => {
  const post = await postModel
    .findById(id)
    .populate("owner", "-password")
    .populate({
      path: "comments",
      populate: {
        path: "owner",
      },
    });
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
 * @return {Promise<boolean>}
 */
const checkOwnership = async (owner, id) => {
  const post = await postModel.findById(id);
  if (!post) throw new ApiError(httpStatus.NOT_FOUND, "Post not found");
  if (post.owner.toString() === owner) return true;
  return false;
};

/**
 * @param  {ObjectId} id
 * @return {Promise<boolean>}
 */
const checkPostIsExist = async (id) => {
  const post = await postModel.findById(id);
  if (!post) throw new ApiError(httpStatus.NOT_FOUND, "Post not found");
  return true;
};

/**
 * @param  {ObjectId} id
 * @return {Promise<boolean>}
 */
const increaseCommentCount = async (comment) => {
  const getPost = await postModel.findById(comment.post);
  let count = 0;
  let comments = getPost.comments;
  comments.push(comment);
  if (getPost.countComment != null && getPost.countComment != undefined)
    count = getPost.countComment + 1;
  const updatePost = await postModel.findByIdAndUpdate(comment.post, {
    countComment: count,
    comments,
  });
  return updatePost;
};

module.exports = {
  createPost,
  updatePost,
  getPosts,
  getPostById,
  deletePost,
  checkPostIsExist,
  increaseCommentCount,
};
