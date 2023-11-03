import express from "express";
import { getAllPosts, getPostById } from "../controllers/post.c.js";

export const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
