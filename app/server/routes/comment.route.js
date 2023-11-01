const express = require("express");
const postController = require("../controllers/comment.controller");

const router = express.Router();

router.post("/create", postController.create);
router.get("/list/:postId", postController.getListByPostId);

router.route("/:id").get(postController.getOne).patch(postController.update).delete(postController.delete);

module.exports = router;
