import express from 'express';
import * as commentController from '../controllers/commentController.js';

const router = express.Router();

router.get('/', commentController.getAllComment);
router.get('/:id', commentController.getComment);
router.post('/', commentController.createComment);
router.put('/', commentController.updateComment);
router.delete('/', commentController.deleteComment);

export default router;
