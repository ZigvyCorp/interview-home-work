// routes/commentRoutes.js
const express = require("express");
const commentController = require("../controllers/comments.controller");

const router = express.Router();

router.get("/comments", commentController.getAllComments);

router.get("/posts/:id/comments", commentController.getCommentsForPost);

router.get("/comments/:id", commentController.getCommentById);

router.post("/comments", commentController.addComment);

router.put("/comments/:id", commentController.updateComment);

router.delete("/comments/:id", commentController.deleteComment);

module.exports = router;
