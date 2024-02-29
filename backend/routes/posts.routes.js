const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getCommentsByPostId,
} = require("../controllers/posts.controller");
const { ensureAuthenticated } = require("../middlewares/auth.middleware");

const router = express.Router();

// Get all posts: GET /api/v1/posts?page=1&limit=10
router.get("/", getPosts);

// Create new post: POST /api/v1/posts
router.post("/", ensureAuthenticated, createPost);

// Get a post by id: GET /api/v1/posts/:id
router.get("/:id", getPostById);

// Update post by id: PATCH /api/v1/posts/:id
router.patch("/:id", ensureAuthenticated, updatePost);

// Delete post by id: DELETE /api/v1/posts/:id
router.delete("/:id", ensureAuthenticated, deletePost);

// Get comments by post id: GET /api/v1/posts/:id/comments?page=1&limit=10
router.get("/:id", ensureAuthenticated, getCommentsByPostId);

module.exports = router;
