import express from 'express';
const router = express.Router();

import postsController from '../controllers/PostsController';

router.get('/more', postsController.getMore);
router.get('/', postsController.getAll);

export default router;
