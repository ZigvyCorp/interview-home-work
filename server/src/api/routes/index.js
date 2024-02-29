import { Router } from 'express';
import post from './post.js';
import comment from './comment.js';
const router = Router();

router.use('/post', post);
router.use('/comment', comment);

export default router;
