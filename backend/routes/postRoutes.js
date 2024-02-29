import express from "express";
import {
  createPost,
  getPostOnPage,
  searchPostByTitle,
} from "../controllers/postController.js";
import { protect } from "../controllers/userController.js";

const routesPost = express.Router();

routesPost.post("/", protect, createPost);
routesPost.get("/", protect, getPostOnPage);
routesPost.get("/search", protect, searchPostByTitle);
export default routesPost;
