import { Router } from "express";
import * as postController from "../controllers/post.controller";

const postRouter = Router();

postRouter.get("/", postController.getPost);
postRouter.post("/", postController.createPost);

export default postRouter;
