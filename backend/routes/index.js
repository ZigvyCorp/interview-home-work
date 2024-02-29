import express from "express";
import routesPost from "./postRoutes.js";
import routesUser from "./userRoutes.js";
import routesComment from "./commentRoutes.js";

const router = express.Router();

router.use("/post", routesPost);
router.use("/user", routesUser);
router.use("/comment", routesComment);

export default router;
