import express from "express";
import { commentController } from "../controllers/index.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const commentRoute = express.Router();
commentRoute.post("/add", isAuthenticatedUser, commentController.createComment);
commentRoute.get("/all", isAuthenticatedUser, commentController.getComments);
commentRoute.get(
  "/:id",
  isAuthenticatedUser,
  commentController.getCommentByPost
);
commentRoute.patch(
  "/:id",
  isAuthenticatedUser,
  commentController.updateComment
);
commentRoute.delete(
  "/:id",
  isAuthenticatedUser,
  commentController.deleteComment
);

export default commentRoute;
