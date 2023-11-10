import express from 'express';
import { postRoutes } from './post.js';
import { userRoutes } from './user.js';
import { commentRoutes } from './comment.js';
const router = express.Router();

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);

export { router as routes };
