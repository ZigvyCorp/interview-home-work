import express from "express";
import { getComment, getPost, getPostByIdPost, getPostByTitle } from "../controllers/postController.js";
const postRouter = express.Router();

// get all posts with author
postRouter.get("/get-post", getPost);

// get post by idPost
postRouter.get("/get-post/:idPost", getPostByIdPost);

// get comment of post
postRouter.get("/get-comment/:idPost", getComment);

// search keyword
postRouter.get("/get-post-by-title", getPostByTitle);

export default postRouter;