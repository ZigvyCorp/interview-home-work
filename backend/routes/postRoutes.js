import express from "express";
import { createPost, getPostOnPage } from "../controllers/postController.js";

const routesPost = express.Router();

routesPost.post("/", createPost);
routesPost.get("/", getPostOnPage);

export default routesPost;
