import express from "express";
import { asyncHandler } from "../helpers/asyncHandle";
import { PostService } from "../services/post.service";
import { PostController } from "../controllers/post.controller";
import validationService from "../helpers/validation";

const router = express.Router();

const postService = new PostService();
const postController = new PostController(postService, validationService);

router.get("/", asyncHandler(postController.getAllPost()));
router.get("/:id", asyncHandler(postController.getPostDetailById()));
router.get("/:id/comments", asyncHandler(postController.getAllCommentOfPost()));
router.post("/", asyncHandler(postController.createPost()));
router.put("/", asyncHandler(postController.updatePost()));
router.delete("/:id", asyncHandler(postController.deletePost()));

export default router;
