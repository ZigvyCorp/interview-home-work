import express from "express";
import { createComment, getCmtByPost } from "../controller/commentController.js";

const commentRoute = express.Router();

commentRoute.use("/addComment", createComment);
commentRoute.use("/getCommentByPost", getCmtByPost);

export default commentRoute;
