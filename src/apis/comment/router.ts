import { Router } from 'express';
import { auth } from '../../shared/jwt';
import Controller from './controller';

const router = Router();

router.post('/create-comment', auth, Controller.createComment);
router.get('/get-comment-by-id/:_id', Controller.getCommentById);
router.put('/update-comment', auth, Controller.updateComment);
router.delete('/delete-comment', auth, Controller.deleteComment);

export default router;