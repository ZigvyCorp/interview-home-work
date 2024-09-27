

import { Router } from "express";
import { getCommentByPostId } from "../controllers/comment.controller.js";

const router = Router()

router.get('/:postId' , getCommentByPostId)

export default router