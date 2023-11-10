// routes/postRoutes.js
const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.get("/posts", postController.getAllPosts);

router.get("/posts/:id", postController.getPostById);

router.post("/posts", postController.addPost);

router.put("/posts/:id", postController.updatePost);

router.delete("/posts/:id", postController.deletePost);

module.exports = router;
