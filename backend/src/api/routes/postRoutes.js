const router = require('express').Router();
import { PostController } from '../controllers';

router.get('', PostController.getPosts);

router.post('', PostController.addPost);

router.get('/:postId', PostController.getPost);

router.put('/:postId', PostController.updatePost);

router.delete('/:postId', PostController.deletePost);

router.get('/:postId/comments', PostController.getCommentsByPost);

router.post('/:postId/comments', PostController.addCommentToPost);

export default router;