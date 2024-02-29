const User = require("../models/user.model");
const Post = require("../models/post.model");

const asyncHandler = require("express-async-handler");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/jwt");
const jwt = require("jsonwebtoken");
// const { sendMail } = require("../utils/sendMail");
const crypto = require("crypto");

const register = asyncHandler(async (req, res) => {
  const { email, password, userName } = req.body;
  if (!email || !password || !userName) {
    return res.status(400).json({
      sucess: false,
      mes: "Missing inputs",
    });
  }

  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User is already registered");
  } else {
    const newUser = await User.create(req.body);
    return res.status(200).json({
      sucess: newUser ? true : false,
      mes: newUser ? "create user successfully" : "something went wrong",
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      sucess: false,
      mes: "Missing inputs",
    });
  }

  const response = await User.findOne({ email });

  if (response && (await response.isCorrectPassword(req.body.password))) {
    // biến object nhiều tầng thành plain object
    // Khong show password and role khi tra ve data
    const { password, role, refreshToken, ...userData } = response.toObject();
    //Create accessToken && refreshToken
    const accessToken = generateAccessToken(response._id, role);
    const newRefreshToken = generateRefreshToken(response._id);

    // Update lai refreshToken vao database - new : true la tra ve data sau khi update
    await User.findByIdAndUpdate(
      response._id,
      { refreshToken: newRefreshToken },
      { new: true }
    );

    // Luu refreshToken vao cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      sucess: true,
      mes: "Login successfully!!!",
      accessToken,
      userData,
    });
  } else {
    throw new Error("invalid credentials");
  }
});

const logout = asyncHandler(async (req, res) => {
  // Lấy token từ cookies
  const cookie = req.cookies;
  // Check xem có token hay không
  if (!cookie || !cookie.refreshToken)
    throw new Error("No refresh token in cookies");
  // Xoa refresh token o database
  // Ham update co ba doi so:
  // + Dau tien la dieu kien
  // + Doi so thu 2 la update lai
  // + new la true la tra ve database moi
  await User.findOneAndUpdate(
    { refreshToken: cookie.refreshToken },
    { refreshToken: "" },
    { new: true }
  );
  // Xoa refresh token o cookie trinh duyet
  res.clearCookie("refreshToken", { httpOnly: true, secure: true });
  return res.status(200).json({
    sucess: true,
    mess: "logout successfully",
  });
});

const createUser = asyncHandler(async (req, res) => {
  const response = await User.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    user: response ? response : "Cannot create new user",
  });
});

const updateUserById = asyncHandler(async (req, res) => {
  const { uId } = req.params;
  const { posts } = req.body;

  // const {postId} = req.params
  if (Object.keys(req.body).length === 0) throw new Error("missing inputs");

  const response = await User.findOneAndUpdate(
    { _id: uId },
    { $set: req.body },
    { new: true }
  );
  return res.status(200).json({
    success: response ? true : false,
    user: response ? response : `Cannot update user ${uId}`,
  });
});

const getUserById = asyncHandler(async (req, res) => {
  // console.log(req.params)
  const { uId } = req.params;
  const user = await User.findById({ _id: uId });

  console.log(user);
  return res.status(200).json({
    sucess: user ? true : false,
    user: user ? user : "Can't get user",
  });
});

module.exports = {
  getUserById,
  createUser,
  updateUserById,
  register,
  login,
  logout
};
