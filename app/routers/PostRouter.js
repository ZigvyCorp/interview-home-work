const express = require('express'); // Import Express
const router = express.Router(); // Import Router

// Import Middleware
const { PostMiddleware } = require('../middleware/PostMiddleware');
// Import Post Controller
const { getAllPost, createPostByUserId, getPostById, updatePost, deletePost } = require('../controllers/PostController');

// Get All POST
router.get('/post', PostMiddleware, getAllPost);
// Create post of User
router.post('/post', PostMiddleware, createPostByUserId);
// Get Post by Id
router.get('/post/:postId', PostMiddleware, getPostById);
// Update Post by Id
router.put('/post/:postId', PostMiddleware, updatePost);
// Delete Post By Id
router.delete('/post/:postId',PostMiddleware, deletePost)

module.exports = router