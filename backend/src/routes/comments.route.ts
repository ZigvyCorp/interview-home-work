import express from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import {
  createComment,
  getAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} from "../controllers/comments.controller";

const commentRouter = express.Router();

commentRouter.get("/", getAllComments);
commentRouter.get("/:commentId", getCommentById);
commentRouter.post("/", createComment);
commentRouter.patch("/:commentId", updateCommentById);
commentRouter.delete("/:commentId", deleteCommentById);
// commentRouter.post("/", verifyToken, createComment);
// commentRouter.patch("/:commentId", verifyToken, updateCommentById);
// commentRouter.delete("/:commentId", verifyToken, deleteCommentById);

export default commentRouter;
