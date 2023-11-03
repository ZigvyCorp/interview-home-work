import express from 'express';
import * as postController from '../controllers/postController.js';

const router = express.Router();

router.get('/', postController.getAllPost);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/', postController.updatePost);
router.delete('/', postController.deletePost);

export default router;
