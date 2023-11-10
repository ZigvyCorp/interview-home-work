import { Express } from "express";
import commentRoute from "./comment.route";
import postRoute from "./post.route";
import userRoute from "./user.route";

const withRoute = (app: Express) => {
	app.use("/api/v1/users", userRoute);
	app.use("/api/v1/posts", postRoute);
	app.use("/api/v1/comments", commentRoute);
};
export default withRoute;
