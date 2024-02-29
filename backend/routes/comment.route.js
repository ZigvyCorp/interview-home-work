const express = require("express");
const router = express.Router();
const ValidationMiddleware = require("../middlewares/validation.middleware");
const { query } = require("express-validator");
const commentController = require("../controllers/comment.controller");
const CommentValidator = require("../validators/comment.validator");
const IdValidator = require("../validators/id.validator");

router.get(
	"/",
	[query("postId").optional().isMongoId().withMessage("Invalid ID"), ValidationMiddleware],
	commentController.getComments
);
router.post("/", CommentValidator, commentController.addComment);
router.get("/:id", IdValidator, commentController.getCommentById);
router.put("/:id", [...IdValidator, ...CommentValidator], commentController.updateComment);
router.delete("/:id", IdValidator, commentController.deleteComment);

module.exports = router;
