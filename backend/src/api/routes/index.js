import { Router } from 'express';
import post from './post.js';
import comment from './comment.js';
import user from './user.js'
const router = Router();

router.use('/post', post);
router.use('/comment', comment);
router.use('/user', user);

export default router;
