const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

// Get by pagination
router.get("/", postController.getPosts);

// Get by id
router.get("/:id", postController.getPostById);

// Create
router.post("/", postController.createPost);

// Update
router.put("/:id", postController.updatePost);

// Delete
router.delete("/:id", postController.deletePost);

module.exports = router;
