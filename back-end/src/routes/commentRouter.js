var express = require("express");
const {
  createComment,
  deleteCommentById,
  updateCommentById,
  findComments,
  findCommentById,
  findCommentsByPostId,
} = require("../controllers/commentController");

let router = express.Router();
router.get("/", findComments);
router.get("/:id", findCommentById);
router.get("/post/:id", findCommentsByPostId);
router.post("/", createComment);
router.put("/", updateCommentById);
router.delete("/:id", deleteCommentById);

module.exports = router;
