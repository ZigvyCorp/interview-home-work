import express from "express";

import postController from "../controllers/post.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(auth, postController.createPost).get(postController.getPosts)
router.route("/:id").post(auth, postController.addComment).get(postController.getPost).delete(auth, postController.deletePost)

export default router;