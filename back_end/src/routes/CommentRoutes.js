const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");

router.get("/", commentController.getAllComments);
router.post("/", commentController.createComment);
router.get("/:id", commentController.getCommentById);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
