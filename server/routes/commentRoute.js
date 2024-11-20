import express from 'express';
import {
    createComment,
    deleteComment,
    getComment,
    updateComment
} from '../controllers/commentController.js';

const router = express.Router();

router.post("/:postId", createComment)

router.get("/", getComment)

router.delete("/:commentId", deleteComment)

router.put("/:commentId", updateComment)

export default router;
