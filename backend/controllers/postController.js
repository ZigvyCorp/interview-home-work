const Post = require("../models/post");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
// const ObjectID = require("mongodb").ObjectId;

const createPost = asyncHandler(async (req, res) => {
  const { owner, title } = req.body;
  if (!owner || !title) throw new Error("Vui lòng nhập đầy đủ");

  const alreadyOwner = await User.findById(owner);
  if (!alreadyOwner) throw new Error("Người dùng không tồn tại");
  const response = await Post.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Tạo bài viết mới thất bại",
  });
});
const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Post.findById(id);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Lấy dữ liệu bài viết thất bại",
  });
});
const getPosts = asyncHandler(async (req, res) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || process.env.LIMIT;
  const skip = (page - 1) * limit;
  const response = await Post.find().skip(skip).limit(limit);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Lấy dữ liệu các bài viết thất bại",
  });
});
const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (Object.keys(req.body).length === 0)
    throw new Error("Vui lòng nhập đầy đủ");
  const response = await Post.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Cập nhật bài viết thất bại",
  });
});
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Post.findByIdAndDelete(id);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Xóa bài viết thất bại",
  });
});

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
