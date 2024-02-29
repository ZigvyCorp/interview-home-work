import express from "express";
import {
  createComment,
  getCommentById,
} from "../controllers/commentController.js";
import { protect } from "../controllers/userController.js";

const routesComment = express.Router();

routesComment.get("/post/:postId", protect, getCommentById);
routesComment.post("/", protect, createComment);

export default routesComment;
