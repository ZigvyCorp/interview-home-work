import { Router } from 'express';
import { findAllCommentsByPostIDController } from './controllers/comment.controller';

const commentRoutes = Router();

commentRoutes.get('/', findAllCommentsByPostIDController);

export default commentRoutes;
