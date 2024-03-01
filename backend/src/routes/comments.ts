import { Router } from "express";
import commentsController from "../controllers/comments";

const router = Router()

router.get('/comments', commentsController.getComments)

export default router