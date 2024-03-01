import express from "express";
import userRoute from "./userRoute.js";
import postRoute from "./postRoutes.js";
import commentRoute from "./commentRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/user", userRoute);
rootRoute.use("/comment", commentRoute);
rootRoute.use("/", postRoute);

export default rootRoute;
