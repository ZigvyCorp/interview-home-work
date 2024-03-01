var express = require("express");
const {
  createPost,
  deletePostById,
  updatePostById,
  findPostById,
  findPosts,
  findPostByTitle,
} = require("../controllers/postController");

let router = express.Router();
router.get("/", findPosts);
router.get("/search", findPostByTitle);
router.get("/:id", findPostById);
router.post("/", createPost);
router.put("/", updatePostById);
router.delete("/:id", deletePostById);

module.exports = router;
