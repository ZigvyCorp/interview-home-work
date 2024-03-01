import express from "express";
import { handleGetComment } from "../controllers/comment.controller.js";

export const commentRouter = express.Router();

commentRouter.get('/', handleGetComment)