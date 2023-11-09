import { Express } from "express";
import userRoute from "./user.route";

const withRoute = (app: Express) => {
	app.use("/api/v1/users", userRoute);
};
export default withRoute;
