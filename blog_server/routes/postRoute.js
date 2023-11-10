import express from "express";
import { postController } from "../controllers/index.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const postRoute = express.Router();
postRoute.get("/", isAuthenticatedUser, postController.getPosts);
postRoute.post("/", isAuthenticatedUser, postController.createPost);
postRoute.get("/:id", isAuthenticatedUser, postController.getPostId);
postRoute.put("/update", isAuthenticatedUser, postController.updatePost);
postRoute.delete("/:id", isAuthenticatedUser, postController.deletePost);

export default postRoute;
