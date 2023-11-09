import { Express } from "express";
import userRouter from "./user.route";
import postRouter from "./post.route";
import commentRouter from "./comment.route";

const initRouters = (app: Express) => {
	app.use("/user", userRouter);
	app.use("/post", postRouter);
	app.use("/comment", commentRouter);
};

export default initRouters;
