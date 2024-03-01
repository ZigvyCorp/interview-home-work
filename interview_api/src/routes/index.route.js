import express from "express";
import { postRouter } from "./post.route.js";
import { commentRouter } from "./comment.route.js";
import { authRouter } from "./auth.route.js";
import { userRouter } from "./user.route.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router.use("/v1/posts", postRouter);
router.use("/v1/comments", commentRouter);
router.use("/v1/auth", authRouter);
router.use("/v1/user", [verifyJWT, userRouter]);

export default router;
