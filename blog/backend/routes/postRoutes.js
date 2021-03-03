import express from 'express';
import {
  getCommentsByPostId,
  getPostById,
  getPosts,
} from '../controllers/postControllers.js';

const router = express.Router();

router.route('/').get(getPosts);

router.route('/:id').get(getPostById);

router.route('/:id/comments').get(getCommentsByPostId);

export default router;
