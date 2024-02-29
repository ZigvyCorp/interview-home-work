import {
  createPost,
  deletePost,
  getAllPosts,
  getComments,
  getPost,
  updatePost,
  updatePostPatch,
} from "../controllers/post.controller";
import { Router } from "express";

export default (router: Router) => {
  router.get("/posts", getAllPosts);
  router.get("/posts/:id", getPost);
  router.post("/posts", createPost);
  router.get("/posts/:id/comments", getComments);
  router.put("/posts/:id", updatePost);
  router.patch("/posts/:id", updatePostPatch);
  router.delete("/posts/:id", deletePost);
};
