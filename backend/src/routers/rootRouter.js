import express from "express";
import postRouter from "./postRouter.js";

const rootRouter = express.Router();

rootRouter.use("/post", postRouter);

export default rootRouter;