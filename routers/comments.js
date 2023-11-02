import express from 'express';
import { CommentsController } from '../controllers/comments.js'

const router = express.Router();
const commentsController = new CommentsController();

router.get("/", commentsController.getAllComments);

export default router;