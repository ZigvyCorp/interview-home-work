import express from 'express';
import CommentController from 'src/controllers/CommentController';
import UserController from 'src/controllers/UserController';

const router = express.Router();

router.post('/', CommentController.createComment);
router.delete('/', CommentController.deleteComment);
router.put('/', CommentController.updateComment);
router.get('/', CommentController.getCommentsByPostId);

export default router;
