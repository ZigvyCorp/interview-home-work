import express from "express";
import { getAllPost, getAllPostId } from "../Controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/getAllPost", getAllPost);
postRouter.get("/getAllPostByUserId/:userId", getAllPostId);


export default postRouter;
