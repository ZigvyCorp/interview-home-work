const express = require('express'); // Import Express
const router = express.Router(); // Import Router

// Import Middleware Comment
const { CommentMiddleware } = require('../middleware/CommentMiddleware');
// Import Controller Comment
const { getAllComment, createComment, getCommentById, UpdateComment, deleteComment } = require('../controllers/CommentController');

// Get All Comment
router.get('/comment', CommentMiddleware, getAllComment);
// Create Comment
router.post('/comment', CommentMiddleware, createComment);
// Get Comment By Id
router.get('/comment/:commentId', CommentMiddleware, getCommentById);
// Update Comment By Id
router.put('/comment/:commentId', CommentMiddleware, UpdateComment);
// Delete Comment By Id
router.delete('/comment/:commentId',CommentMiddleware, deleteComment);
module.exports = router