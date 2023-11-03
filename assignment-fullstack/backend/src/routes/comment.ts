import express from 'express';
import { getComments, getCommentByPostId } from '../api/controllers/comment.controller'
import { asyncHandler } from '../helpers/asyncHandler';
const router = express.Router();

router.get('/', asyncHandler(getComments))

router.get("/:id", asyncHandler(getCommentByPostId))

export default router;