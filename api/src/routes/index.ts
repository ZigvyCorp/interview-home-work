import { Router } from "express";
import userRouter from "./user.route";
import postRouter from "./post.route";
import commentRouter from "./comment.route";

const router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);

export default router;
