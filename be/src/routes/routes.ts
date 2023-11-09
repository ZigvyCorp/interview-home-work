import express from "express";
import migrationRouter from "./migration";
import userRouter from "./user";
import commentRouter from "./comment";
import postRouter from "./post";

const router = express.Router();
// // Check Permission
// router.use(permission("1111"));

router.use("/migration", migrationRouter);
router.use("/users", userRouter);
router.use("/comments", commentRouter);
router.use("/posts", postRouter);

// router.get("/", (req, res, next) => {
//   return res.status(200).send("Hello world!");
// });

export default router;
