import { Router } from "express";
import { getPostData , getPostById, getPostByQueryKeyword } from "../controllers/post.controller.js";

const router = Router()

router.get('/' , getPostData)
router.get('/blog/:postId' , getPostById)
router.get('/search' , getPostByQueryKeyword)

export default router