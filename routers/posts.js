import express from 'express';
import { PostsController } from '../controllers/posts.js'

const router = express.Router();
const postsController = new PostsController();

router.get("/", postsController.getAllPost);

export default router;