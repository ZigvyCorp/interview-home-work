import express from "express";
import {
  deletePost,
  getPost,
  getPosts,
  updatePost,
  createPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/", getPosts);
router.post("/", createPost);
router.put("/:id", updatePost);

export default router;
