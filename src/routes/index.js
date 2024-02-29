import { Router } from "express";
const router = Router();

import UserRouter from "./user.route.js";
import PostRouter from "./post.route.js";
import CommentRouter from "./comment.route.js";

router.use("/v1/users", UserRouter);
router.use("/v1/posts", PostRouter);
router.use("/v1/comments", CommentRouter);

export default router;
