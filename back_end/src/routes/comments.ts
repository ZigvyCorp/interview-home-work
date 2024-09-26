import express from 'express';
const router = express.Router();

import commentsController from '../controllers/CommentsController';

router.get('/', commentsController.getAll);

export default router;
