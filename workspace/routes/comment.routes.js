import express from 'express';
import {
  getAllComments,
  getCommentById,
  createComment,
  updateCommentById,
  patchCommentById,
  deleteCommentById
} from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/', getAllComments);
router.get('/:id', getCommentById);
router.post('/', createComment);
router.put('/:id', updateCommentById);
router.patch('/:id', patchCommentById);
router.delete('/:id', deleteCommentById);

export default router;
