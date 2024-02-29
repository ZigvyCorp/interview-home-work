import express from "express";
const router = express.Router();

import PostController from "../controllers/post.controller.js";

router.route("/").get(PostController.getPosts);
router.route("/:id").get(PostController.getPost);
router.route("/:id/comments").get(PostController.getComments);

export default router;
