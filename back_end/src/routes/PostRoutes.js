const express = require("express");
const router = express.Router();
const postController = require("../controllers/PostController");

router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);
router.get("/:title", postController.getPostByTitle);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
