import express from 'express';
import { getAllPosts, createPost } from '../../controllers/v1/post.js';
const postRoutes = express.Router();

postRoutes.get('/', getAllPosts);
postRoutes.post('/', createPost);

export { postRoutes };
