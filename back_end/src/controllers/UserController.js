const User = require("../models/User");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    const { username, password, name, dob } = req.body;
    const maxPost = await User.findOne().sort({ id: -1 });
    const user = new User({
      id: maxPost ? maxPost.id + 1 : 1,
      username,
      password,
      name,
      dob,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const userId = Number(req.params.id);
      const user = await User.findOne({ id: userId }).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { username, password, name, dob } = req.body;
      const userId = Number(req.params.id);
      const user = await User.findOne({ id: userId });
      if (!user) return res.status(404).json({ message: "User not found" });

      if (username) user.username = username;
      if (password) user.password = password;
      if (name) user.name = name;
      if (dob) user.dob = dob;

      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ id: Number(req.params.id) });
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
