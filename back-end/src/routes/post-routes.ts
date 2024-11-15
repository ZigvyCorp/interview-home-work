import express from "express";
import {
  createPostRequest, deletePostRequest,
  getPostByIdOrSlugRequest,
  getPostsRequest,
  updatePostRequest
} from "@/controllers/post-controller";
import authMiddleware from "@/middlewares/auth-middleware";

const router = express.Router();
router.get("/post", getPostsRequest);
router.get("/post/:idOrSlug", getPostByIdOrSlugRequest);
router.post("/post", authMiddleware, createPostRequest);
router.put("/post/:id", authMiddleware, updatePostRequest);
router.delete("/post/:id", authMiddleware, deletePostRequest);

export default router;