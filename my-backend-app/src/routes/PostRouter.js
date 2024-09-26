const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.post("/create-new-post", PostController.createPost);
router.get("/get-all-post", PostController.getAllPosts);
router.get("/get-detail-post/:id", PostController.getPostById);
router.put("/update-post/:id", PostController.updatePostById);
router.delete("/delete-post/:id", PostController.deletePostById);

module.exports = router;
