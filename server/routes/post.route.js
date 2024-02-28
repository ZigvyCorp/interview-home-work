import express from "express";
import {
    createPost,
    getAllPost,
    getCommentsByPostId,
    getPostById,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/:id", getPostById);
router.get("/:postId/comments", getCommentsByPostId);
router.get("/", getAllPost);

export default router;
