import express from "express";
import { getAllComment, getAllCommentId } from "../Controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.get("/getAllComment", getAllComment);
commentRouter.get("/getAllCommentByPostId/:postId", getAllCommentId);


export default commentRouter;