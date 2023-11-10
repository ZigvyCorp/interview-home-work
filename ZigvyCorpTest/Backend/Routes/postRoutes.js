import express from 'express';
import asyncHandler from 'express-async-handler';
import postController from '../controllers/postController.js';
const postRoutes = express.Router();

postRoutes.post('/', asyncHandler(postController.getListPosts));
postRoutes.post('/search', asyncHandler(postController.searchPost));
postRoutes.post('/comments', asyncHandler(postController.getCommentInPost));

export default postRoutes;
