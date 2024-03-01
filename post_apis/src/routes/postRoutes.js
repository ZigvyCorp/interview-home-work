import express from "express";
import { createNewPost, getListPost, getPost, searchPost } from "../controller/postController.js";

const postRoute = express.Router();

postRoute.post("/createPost", createNewPost);
postRoute.get("/getListPost", getListPost);
postRoute.get("/searchPost", searchPost);
postRoute.get("/getPostById/:postId", getPost);

export default postRoute;
