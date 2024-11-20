import express from "express";
import {
  deleteComment,
  getComment,
  getComments,
  updateComment,
  createComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.delete("/:id", deleteComment);
router.get("/:id", getComment);
router.get("/", getComments);
router.post("/", createComment);
router.put("/:id", updateComment);

export default router;
