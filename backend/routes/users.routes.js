const express = require("express");
const {
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const { ensureAuthenticated } = require("../middlewares/auth.middleware");
const router = express.Router();

// Get all users: GET /api/v1/users?page=1&limit=10
router.get("/", getAllUsers);

// Get user by id: GET /api/v1/users/:id
router.get("/:id", getUserById);

// Update user by id: PATCH /api/v1/users/:id
router.patch("/:id", ensureAuthenticated, updateUser);

// Delete user by id: DELETE /api/v1/users/:id
router.delete("/:id", ensureAuthenticated, deleteUser);

module.exports = router;
