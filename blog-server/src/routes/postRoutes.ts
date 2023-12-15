import express from "express";
import asyncHandler from "express-async-handler";
import postController from "../controllers/post";
const postRoutes = express.Router();

// [POST] /api/posts
postRoutes.post('/', asyncHandler(postController.getAllPosts));

// [POST] /api/posts/
// postRoutes.post("/", postController.createPost);

export default postRoutes;
