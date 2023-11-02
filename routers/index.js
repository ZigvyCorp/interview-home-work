import postsRouter from './posts.js';
import commentsRouter from './comments.js';
import usersRouter from './users.js';
import express from 'express';

const router = express.Router()

router.use('/posts', postsRouter)
router.use('/comments', commentsRouter)
router.use('/users', usersRouter)

export default router;