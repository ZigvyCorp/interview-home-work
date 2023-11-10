import express from 'express';
import { getComment } from '../../controllers/v1/comment.js';

const commentRoutes = express.Router();
commentRoutes.get('/', getComment);

export { commentRoutes };
