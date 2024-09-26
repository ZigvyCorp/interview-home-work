import express from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  patchPostById,
  deletePostById,
  getCommentsByPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePostById);
router.patch("/:id", patchPostById);
router.delete("/:id", deletePostById);
router.get("/:id/comments", getCommentsByPost);
export default router;
