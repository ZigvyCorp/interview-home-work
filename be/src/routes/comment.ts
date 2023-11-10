import express from "express";
import { asyncHandler } from "../helpers/asyncHandle";
import { CommentController } from "../controllers/comment.controller";
import { CommentService } from "../services/comment.service";
import validationService from "../helpers/validation";

const router = express.Router();

const commentService = new CommentService();
const commentController = new CommentController(
  commentService,
  validationService
);

router.get("/", asyncHandler(commentController.getAllComment()));
router.post("/", asyncHandler(commentController.createComment()));
router.put("/", asyncHandler(commentController.updateComment()));
router.delete("/:id", asyncHandler(commentController.deleteComment()));

export default router;
