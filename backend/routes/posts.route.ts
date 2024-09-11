import express from "express";

import { createPosts, getPosts } from "../controllers/posts.controller";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts);

export default router;
