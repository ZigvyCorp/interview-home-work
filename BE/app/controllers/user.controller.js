// controllers/userController.js
const UserModel = require("../models/user.model");

exports.getAllUsers = (req, res) => {
  const users = UserModel.getAllUsers();
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = UserModel.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

exports.addUser = (req, res) => {
  const newUser = req.body;
  UserModel.addUser(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const updatedUser = req.body;
  UserModel.updateUser(updatedUser);
  res.json(updatedUser);
};

exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  UserModel.deleteUser(userId);
  res.status(204).send();
};
