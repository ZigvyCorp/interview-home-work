import { Router } from "express";
import { CommentController } from "../controllers/commentController";

const router = Router();

router.get("/", CommentController.getAllComments);
router.get("/post/:postId", CommentController.getCommentsByPostId);
router.post("/", CommentController.createComment);
router.put("/:id", CommentController.updateComment);
router.delete("/:id", CommentController.deleteComment);

export default router;
