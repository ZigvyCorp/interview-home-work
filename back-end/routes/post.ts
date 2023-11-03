import express from "express";
import postController from "../controllers/post";

const postRouter = express.Router();

postRouter.get("/", postController.getPosts);
postRouter.get("/search", postController.searchPosts);
postRouter.get("/:id/comments", postController.getCommentsByPost);
postRouter.get("/:id", postController.getPost);
postRouter.post("/create", postController.createPost);
postRouter.patch("/update/:id", postController.updatePost);
postRouter.delete("/delete/:id", postController.deletePost);

export default postRouter;
