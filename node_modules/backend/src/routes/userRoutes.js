/**
 * @fileoverview This file defines the routes for user-related operations using the Express framework.
 * It sets up the necessary endpoints for user management, including creating, reading, updating, and deleting users.
 * 
 * @requires express
 */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

// Add more routes as needed

module.exports = router;