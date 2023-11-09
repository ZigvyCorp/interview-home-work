const express = require("express");
const router = express.Router();
const { asyncHandle } = require("../../utils/index");
const postController = require("../../controllers/post.controller");

router.get("/", asyncHandle(postController.getAllPost));
router.get("/:id", asyncHandle(postController.getPostById));

module.exports = router;
