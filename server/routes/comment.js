const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

// Get comments
router.get("/", commentController.getComments);

// Create
router.post("/", commentController.createComment);
module.exports = router;
