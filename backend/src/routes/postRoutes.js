import express from 'express';
import { createPost, getCommentsByPostid, getPost, getPostsList, updatePost } from '../controllers/postController.js';
import { getCurrentUser } from '../middleware/current-user.js';

const postRoutes = express.Router();

postRoutes.use(getCurrentUser);
postRoutes.route('/').post(createPost).get(getPostsList);
postRoutes.route('/:id').get(getPost).put(updatePost)
postRoutes.route('/:id/comments').get(getCommentsByPostid);

export default postRoutes;
