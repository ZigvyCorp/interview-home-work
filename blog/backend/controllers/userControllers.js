import asyncHander from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Fetch all users
// @route GET /api/users
// @access public
const getUsers = asyncHander(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Fetch single user
// @route GET /api/users/:id
// @access public
const getUserById = asyncHander(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    throw new Error('User not found!');
  }
});

export { getUsers, getUserById };
