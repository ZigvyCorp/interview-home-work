import { Router } from 'express';
import { getPost } from '../controllers/post/index.js';

const router = Router();

router.get('/get-posts', getPost);

export default router;
