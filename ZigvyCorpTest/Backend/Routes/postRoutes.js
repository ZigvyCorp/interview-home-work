import express from 'express';
import asyncHandler from 'express-async-handler';
import postController from '../controllers/postController.js';
const postRoutes = express.Router();

postRoutes.get('/', asyncHandler(postController.getListPosts));

export default postRoutes;
