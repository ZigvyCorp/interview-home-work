import express from "express";
import { deletePostById, findAllPosts, getCommentByPosst, getPostById, updatePostById } from "../controller/postController.js";
const router = express.Router();

router.get("/",findAllPosts)
router.get("/:id",getPostById)
router.get("/:id/comments",getCommentByPosst)
router.delete("/:id",deletePostById)
router.put("/:id",updatePostById)

export default router