import express, { Router } from "express";
import postRouter from "src/routers/post.router";
import commentRouter from "src/routers/comment.router";

const router: Router = express.Router();

router.use(postRouter);
router.use(commentRouter);

export default router;
