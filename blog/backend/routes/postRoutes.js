import express from 'express';
import {
  getCommentsByPostId,
  getPosts,
} from '../controllers/postControllers.js';

const router = express.Router();

router.route('/').get(getPosts);

router.route('/:id/comments').get(getCommentsByPostId);

export default router;
