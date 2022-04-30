import Router from 'express';
import { checkJwt, validate } from '../../middlewares';
import { commentControllers } from '../controllers';
import { createCommentSchema, deleteCommentSchema } from '../validators/comment.validation';

const router = Router();

router.post('/', checkJwt, validate(createCommentSchema), commentControllers.createComment); // Oke
router.put('/:commentID', checkJwt, commentControllers.updateComment);
router.delete('/:commentID', checkJwt, validate(deleteCommentSchema), commentControllers.deleteComment); // Ok

export default router;
