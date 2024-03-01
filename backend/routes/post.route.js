const express = require("express");
const router = express.Router();
const IdValidator = require("../validators/id.validator");
const PaginationValidator = require("../validators/pagination.validator");
const controller = require("../controllers/post.controller");
const { query } = require("express-validator");
const PostValidator = require("../validators/post.validator");

router.get(
	"/",
	[PaginationValidator, query("title_like").optional().isString()],
	controller.getPosts
);
router.post("/", PostValidator, controller.addPost);
router.get("/:id", IdValidator, controller.getById);
router.put("/:id", [...IdValidator, ...PostValidator], controller.updatePost);
router.delete("/:id", IdValidator, controller.deletePost);
router.get("/:id/comments", IdValidator, controller.getComments);

module.exports = router;
