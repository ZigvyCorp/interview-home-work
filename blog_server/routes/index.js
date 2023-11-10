import express from "express";
import userRouter from "./userRoute.js";
import authRouter from "./authRoute.js";
import postRouter from "./postRoute.js";
import commentRouter from "./commentRoute.js";

const router = express.Router();
router.use("/api/v1/user", userRouter);
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/posts", postRouter);
router.use("/api/v1/comment", commentRouter);

export default router;
