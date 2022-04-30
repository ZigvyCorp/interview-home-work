import Router from 'express';
import { validate } from '../../middlewares';
import { postControllers } from '../controllers';
import {
    createPostSchema,
    deletePostSchema,
    getCommentsByPostSchema,
    updatePostSchema,
} from '../validators/post.validation';
import { checkJwt } from '../../middlewares/check-jwt';

const router = Router();

router.get('/', postControllers.getPosts); // OK
router.get('/:postID/comments', checkJwt, validate(getCommentsByPostSchema), postControllers.getCommentsByPost);
router.post('/', checkJwt, validate(createPostSchema), postControllers.createPost); // Ok
router.put('/:postID', checkJwt, validate(updatePostSchema), postControllers.updatePost); // Ok
router.delete('/:postID', checkJwt, validate(deletePostSchema), postControllers.deletePost); // Ok

export default router;
