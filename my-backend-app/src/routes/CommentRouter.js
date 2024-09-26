const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

router.post("/create-new-comment", CommentController.addComment);
router.get("/getall-comment", CommentController.getAllComments);
router.get("/get-detail-comment/:id", CommentController.getCommentById);
router.put("/update-comment/:id", CommentController.updateComment);
router.delete("/delete-comment/:id", CommentController.deleteComment);

module.exports = router;
