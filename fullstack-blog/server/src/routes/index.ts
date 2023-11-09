import { Express } from "express";
import postRoute from "./post.route";
import userRoute from "./user.route";

const withRoute = (app: Express) => {
	app.use("/api/v1/users", userRoute);
	app.use("/api/v1/posts", postRoute);
};
export default withRoute;
