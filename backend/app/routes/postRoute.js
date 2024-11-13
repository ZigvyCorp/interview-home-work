import express from 'express';
const router = express.Router();
import PostController from '../controllers/postController.js';

// Define routes for Posts
router.get('/posts', PostController.getPosts);
router.get('/posts/:id', PostController.getPost);
router.post('/posts', PostController.createPost);
router.put('/posts/:id', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);

// Export router
export default router;