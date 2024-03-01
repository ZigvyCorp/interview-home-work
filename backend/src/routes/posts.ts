import { Router } from "express";
import postsController from "../controllers/posts";

const router = Router()

router.get('/posts', postsController.getPosts)
router.get('/posts/:id', postsController.getPostById)

export default router