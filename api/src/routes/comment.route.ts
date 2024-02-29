import { Router } from "express";
import * as commentController from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.get("/", commentController.getComment);
commentRouter.post("/", commentController.createComment);

export default commentRouter;
