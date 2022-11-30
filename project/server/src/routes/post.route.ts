
import express from "express";
import postController from "../controllers/post.controller";
import auth from "../middleware/auth.middleware";

const postRouter = express.Router();
postRouter.post("/create",auth, postController.createPost);
postRouter.put("/edit/:id",auth, postController.editPost);
postRouter.delete("/delete/:id",auth, postController.deletePost);
postRouter.get("/", postController.getAllPost);
postRouter.get("/byid/:id", postController.getPost);
export default postRouter;