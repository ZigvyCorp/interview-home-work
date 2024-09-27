/**
 * @file commentRoutes.js
 * @description This file contains the route definitions for handling comment-related operations in the application.
 * It uses the Express framework to define and manage the routes.
 * 
 * @requires express
 */
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);
router.post('/', commentController.createComment);

// Add more routes as needed

module.exports = router;