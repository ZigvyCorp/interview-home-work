import express from "express";
import { getAllPosts, getPostDetail, getPostResult } from "../controller/post.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/search", getPostResult);
router.get("/:id", getPostDetail);

export default router;