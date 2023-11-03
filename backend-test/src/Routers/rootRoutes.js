import express from "express";
import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";
import commentRouter from "./commentRoutes.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/post", postRouter);
rootRouter.use("/comment", commentRouter);

export default rootRouter;
