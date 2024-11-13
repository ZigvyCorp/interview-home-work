const userService = require('../services/userService');

// Utility function to handle errors in a consistent way
const sendErrorResponse = (res, error) => {
  res.status(500).json({ message: error.message });
};

// Main User Controller
const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const { offset = 0, limit = 100 } = req.query;
      const users = await userService.fetchAllUsers(parseInt(offset), parseInt(limit));
      res.status(200).json(users);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userService.fetchUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await userService.deleteUser(req.params.id);
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      sendErrorResponse(res, error);
    }
  },
};

module.exports = UserController;
