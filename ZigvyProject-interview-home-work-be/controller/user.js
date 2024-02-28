const User = require("../models/user.model");
const Post = require("../models/post.model");

const asyncHandler = require("express-async-handler");

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
};
