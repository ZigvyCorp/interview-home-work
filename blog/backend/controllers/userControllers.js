import asyncHander from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Fetch all users
// @route GET /api/users
// @access public
const getUsers = asyncHander(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export { getUsers };
