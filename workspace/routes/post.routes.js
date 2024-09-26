import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  patchPostById,
  deletePostById
} from '../controllers/post.controller.js';

const router = express.Router();

// Define routes for Post
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePostById);
router.patch('/:id', patchPostById);
router.delete('/:id', deletePostById);

export default router;
