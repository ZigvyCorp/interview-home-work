import express from 'express';
const router = express.Router();
import CommentController from '../controllers/commentController.js';

// Define routes for Comments
router.get('/comments', CommentController.getComments);
router.get('/posts/:postId/comments', CommentController.getCommentsByPostId);
router.post('/comments', CommentController.createComment);
router.put('/comments/:id', CommentController.updateComment);
router.delete('/comments/:id', CommentController.deleteComment);

// Export router
export default router;