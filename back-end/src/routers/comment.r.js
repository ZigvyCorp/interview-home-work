import express from "express";
import { getCommentsByPostId } from "../controllers/comment.c.js";

export const commentRouter = express.Router();

commentRouter.get("/post/:postId", getCommentsByPostId);
