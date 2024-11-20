const Comment = require("../models/comment");
const User = require("../models/user");
const Post = require("../models/post");
const asyncHandler = require("express-async-handler");
const ObjectID = require("mongodb").ObjectId;

const createComment = asyncHandler(async (req, res) => {
  const { owner, post, content } = req.body;
  if (!owner || !post || !content) throw new Error("Vui lòng nhập đầy đủ");

  const alreadyOwner = await User.findById(owner);
  if (!alreadyOwner) throw new Error("Người dùng không tồn tại");

  const alreadyPost = await Post.findById(post);
  if (!alreadyPost) throw new Error("Bài viết không tồn tại");

  const response = await Comment.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Tạo người dùng mới thất bại",
  });
});
const getComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Comment.findById(id);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Lấy dữ liệu người dùng thất bại",
  });
});
const getComments = asyncHandler(async (req, res) => {
  const queries = { ...req.query };
  const exludeFields = ["limit", "sort", "page", "fields"];
  exludeFields.forEach((el) => delete queries[el]);
  let queryString = JSON.stringify(queries);
  queryString = queryString.replace(
    /\b(gte|gt|lt|lte)\b/g,
    (macthedEl) => `$${macthedEl}`
  );
  const formatedQueries = JSON.parse(queryString);
  Object.keys(formatedQueries).forEach((key) => {
    if (!formatedQueries[key]) {
      delete formatedQueries[key];
    }
  });

  if (queries.postId) {
    formatedQueries.post = new ObjectID(queries.postId);
    delete formatedQueries.postId;
  }

  let queryCommand = Comment.find(formatedQueries);

  const page = +req.query.page || 1;
  const limit = +req.query.limit || process.env.LIMIT;
  const skip = (page - 1) * limit;
  queryCommand.skip(skip).limit(limit);

  const response = await queryCommand.exec();

  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Lấy dữ liệu các người dùng thất bại",
  });
});
const updateComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (Object.keys(req.body).length === 0)
    throw new Error("Vui lòng nhập đầy đủ");
  const response = await Comment.findByIdAndUpdate(
    id,
    { content: req.body?.content },
    {
      new: true,
    }
  );
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Cập nhật người dùng thất bại",
  });
});
const deleteComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await Comment.findByIdAndDelete(id);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Xóa người dùng thất bại",
  });
});

module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
