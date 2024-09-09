import express from "express";

import { getPosts } from "../controllers/posts.controller";

const router = express.Router();

router.get("/posts", getPosts);

export default router;
