import express from "express";
import {
  createComment,
  getCommentById,
} from "../controllers/commentController.js";

const routesComment = express.Router();

routesComment.get("/post/:postId", getCommentById);
routesComment.post("/", createComment);

export default routesComment;
