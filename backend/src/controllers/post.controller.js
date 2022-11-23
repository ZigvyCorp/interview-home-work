const catchAsync = require("../utils/catchAsync");
const postServices = require("./../services/post.service");

const createPost = catchAsync(async (req, res, next) => {
  const post = await postServices.createPost(req.user._id, req.body);
  const getFullPost = await postServices.getPostById(post._id);
  res.json({
    data: getFullPost,
  });
});

const updatePost = catchAsync(async (req, res, next) => {
  const post = await postServices.updatePost(
    req.user._id,
    req.body.postId,
    req.body
  );
  res.json({
    data: post,
  });
});

const getPosts = catchAsync(async (req, res, next) => {
  const post = await postServices.getPosts(req.query);

  res.json({
    data: post,
  });
});

const getPostById = catchAsync(async (req, res, next) => {
  const post = await postServices.getPostById(req.params.id);

  res.json({
    data: post,
  });
});

const deletePost = catchAsync(async (req, res, next) => {
  const post = await postServices.deletePost(req.user._id, req.params.id);
  res.json({
    data: post,
  });
});

module.exports = {
  createPost,
  updatePost,
  getPosts,
  getPostById,
  deletePost,
};
