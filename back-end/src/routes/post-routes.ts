import express from "express";
import {
  createPostRequest, deletePostRequest,
  getPostByIdOrSlugRequest,
  getPostsRequest,
  updatePostRequest
} from "@/controllers/post-controller";
import authMiddleware from "@/middlewares/auth-middleware";
import { createCommentRequest, getCommentsRequest } from "@/controllers/comment-controller";

const router = express.Router();
router.get("/posts", getPostsRequest);
router.get("/posts/:idOrSlug", getPostByIdOrSlugRequest);
router.post("/posts", authMiddleware, createPostRequest);
router.put("/posts/:id", authMiddleware, updatePostRequest);
router.delete("/posts/:id", authMiddleware, deletePostRequest);
// comments
router.get("/posts/:id/comments", getCommentsRequest);
router.post("/posts/:id/comments",authMiddleware, createCommentRequest);

export default router;