const express = require('express'); // Import Express
const router = express.Router();

// Import Middleware User
const { UserMiddleware } = require('../middleware/UserMiddleware');
// Import Controller User
const { getAllUser, getUserById, createUser, updateUser, deleteUser, getUsername } = require('../controllers/UserController');

// Get all User
router.get('/user', UserMiddleware, getAllUser);
// Get user By Id
router.get('/user/:userId', UserMiddleware, getUserById)
// Create user
router.post('/user', UserMiddleware, createUser);
// Update user by Id
router.put('/user/:userId', UserMiddleware, updateUser);
// Delete user by Id
router.delete('/user/:userId', UserMiddleware, deleteUser);

module.exports = router;