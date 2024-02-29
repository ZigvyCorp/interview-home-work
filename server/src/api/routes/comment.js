import { Router } from 'express';
import { getComment } from '../controllers/comment/index.js';

const router = Router();

router.get('/get-comments', getComment);

export default router;
