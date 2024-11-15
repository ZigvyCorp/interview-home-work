import express from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import {
  createPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById,
} from "../controllers/posts.controller";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:postId", getPostById);
postRouter.post("/", createPost);
postRouter.patch("/:postId", updatePostById);
postRouter.delete("/:postId", deletePostById);
// postRouter.post("/", verifyToken, createPost);
// postRouter.patch("/:postId", verifyToken, updatePostById);
// postRouter.delete("/:postId", verifyToken, deletePostById);

export default postRouter;
