import express from 'express';
import { getAllComments, createComment } from '../controllers/comment-controller.js';

const commentRouter = express.Router();

commentRouter.get('/', getAllComments);
commentRouter.post('/add', createComment);

export default commentRouter;