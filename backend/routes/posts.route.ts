import express from "express";

import {
  createPosts,
  getPosts,
  getPost,
} from "../controllers/posts.controller";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts);

router.route("/:id").get(getPost);

export default router;
