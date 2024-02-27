const express = require("express");
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments.controller");
const { ensureAuthenticated } = require("../middlewares/auth.middleware");

const router = express.Router();

// Create a new comment: POST /api/v1/comments
router.post("/", ensureAuthenticated, createComment);

// Update a comment by id: PATCH /api/v1/comments/:id
router.patch("/:id", ensureAuthenticated, updateComment);

// Delete a comment by id: DELETE /api/v1/comments/:id
router.delete("/:id", ensureAuthenticated, deleteComment);

module.exports = router;
