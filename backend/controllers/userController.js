const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) throw new Error("Vui lòng nhập đầy đủ");

  const user = await User.findOne({ username });
  if (user) throw new Error("Người dùng đã tồn tại");

  const response = await User.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Tạo người dùng mới thất bại",
  });
});
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await User.findById(id);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Lấy dữ liệu người dùng thất bại",
  });
});
const getUsers = asyncHandler(async (req, res) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || process.env.LIMIT;
  const skip = (page - 1) * limit;
  const response = await User.find().skip(skip).limit(limit);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Lấy dữ liệu các người dùng thất bại",
  });
});
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (Object.keys(req.body).length === 0)
    throw new Error("Vui lòng nhập đầy đủ");
  const response = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Cập nhật người dùng thất bại",
  });
});
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await User.findByIdAndDelete(id);
  return res.status(200).json({
    success: response ? true : false,
    data: response ? response : "Xóa người dùng thất bại",
  });
});

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
