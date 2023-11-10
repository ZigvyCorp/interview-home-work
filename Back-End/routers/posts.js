import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

router.post("/update", updatePost);

router.delete("/:id", deletePost);

export default router;
