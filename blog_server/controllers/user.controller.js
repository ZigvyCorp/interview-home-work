const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(201).json(users);
});

module.exports = { getUsers };
