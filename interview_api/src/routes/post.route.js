import express from "express";
import { handleGetPost } from "../controllers/post.controller.js";

export const postRouter = express.Router();

postRouter.get('/', handleGetPost)
