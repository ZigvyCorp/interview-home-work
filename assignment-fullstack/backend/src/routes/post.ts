import express from 'express';
import { getPosts, getPost, createPost, updatePost } from '../api/controllers/post.controller'
import { asyncHandler } from '../helpers/asyncHandler';
const router = express.Router();

router.get('/', asyncHandler(getPosts))

router.get('/:id', asyncHandler(getPost))

router.post("/", asyncHandler(createPost))

router.put("/:id", asyncHandler(updatePost))

export default router;