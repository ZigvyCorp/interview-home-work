const express = require("express");
const router = express.Router();
const { asyncHandle } = require("../../utils/index");
const commentController = require("../../controllers/comment.controller");

router.get("/:postId", asyncHandle(commentController.getAllController));

module.exports = router;
