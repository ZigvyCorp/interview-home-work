import express from 'express';
import {
    createPost,
    deletePost,
    getListPost,
    getPostDetail,
    updatePost
} from '../controllers/postController.js';

const router = express.Router();

router.post("/", createPost)

router.get("/", getListPost)

router.get("/:postId", getPostDetail)

router.delete("/:postId", deletePost)

router.put("/:postId", updatePost)

export default router;
