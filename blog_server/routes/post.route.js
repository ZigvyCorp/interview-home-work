const express = require("express");
const {
  getPosts,
  getPostById,
  getCommentsForPost,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id/comments", getCommentsForPost);
router.get("/:id", getPostById);

module.exports = router;
