import { Router } from "express";
import CommentController from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.post("/", CommentController.create);
commentRouter.get("/", CommentController.getCommentsPost);

export default commentRouter;
