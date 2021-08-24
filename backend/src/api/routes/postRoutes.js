const router = require('express').Router();
import { PostController } from '../controllers';

router.get('', PostController.getPosts);

router.post('', PostController.addPost);

router.get('/:postId', PostController.getPost);

router.put('/:postId', PostController.updatePost);

router.delete('/:postId', PostController.deletePost);

router.get('/:postId/comments', PostController.getComments);

router.post(':postId/comments', PostController.addComment);

export default router;