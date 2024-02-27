const User = require("../models/user.model");

// Get user by id: GET /api/v1/users/:id
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users: GET /api/v1/users?page=1&limit=10
const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    let query = {};

    if (req.query.search) {
      query = { name: { $regex: req.query.search, $options: "i" } };
    }

    const users = await User.find(query).skip(skipIndex).limit(limit);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user by id: PATCH /api/v1/users/:id
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, dob } = req.body;

    const existUser = await User.findById(userId);
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) existUser.name = name;
    if (dob) existUser.dob = dob;

    await existUser.save();

    res
      .status(200)
      .json({ message: "User updated successfully", user: existUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user by id: DELETE /api/v1/users/:id
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const existUser = await User.findById(userId);
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }

    await existUser.remove();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
