import express from 'express';
import PostController from 'src/controllers/PostController';

const router = express.Router();

router.post('/', PostController.createPost);
router.get('/:id', PostController.getPostById);
router.delete('/', PostController.deletePost);
router.put('/', PostController.updatePost);
router.get('/', PostController.getAllPost);

export default router;
