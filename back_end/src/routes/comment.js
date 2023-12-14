const router = require("express").Router();
const commentController = require("../controllers/commentController");

// GET COMMENT BY POST ID
router.get("/", commentController.getCommentsByPostId);

//ADD POST
router.post("/", commentController.addComment);

module.exports = router;
