import express from 'express';
import { addComment, getCommentsList } from '../controllers/commentController.js';
import { getCurrentUser } from '../middleware/current-user.js';

const commentRoutes = express.Router();

commentRoutes.use(getCurrentUser);
commentRoutes.route('/').post(addComment).get(getCommentsList);

export default commentRoutes;