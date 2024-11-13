/**
 * @fileoverview This file defines the routes for handling post-related operations in the application.
 * It uses the Express framework to create and manage the routes.
 * 
 * @requires express
 */
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getPosts);
router.post('/', postController.createPost);

// Add more routes as needed

module.exports = router;