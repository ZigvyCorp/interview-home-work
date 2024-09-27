import { Router } from "express";
import { PostController } from "../controllers/postController";

const router = Router();

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export default router;
