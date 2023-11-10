import express from "express";
import { getPosts, createPost } from "../controllers/postController";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("/", auth, createPost);
router.get("/", getPosts);
export default router;
