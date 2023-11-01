const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", postController.create);
router.get("/list", postController.list);

router.route("/:id").get(postController.getOne).patch(postController.update).delete(postController.delete);

module.exports = router;
