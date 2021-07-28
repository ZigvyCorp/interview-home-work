import express from 'express';
import { createPost, getPost, getPostsList, updatePost } from '../controllers/postController.js';
import { getCurrentUser } from '../middleware/current-user.js';

const postRoutes = express.Router();

postRoutes.use(getCurrentUser);
postRoutes.route('/').post(createPost).get(getPostsList);
postRoutes.route('/:id').get(getPost).put(updatePost);

export default postRoutes;
