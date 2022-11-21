const express = require("express");
const validate = require("../../middlewares/validate");
const postValidations = require("../../validations/post.validation");
const auth = require("../../middlewares/auth");
const postController = require("./../../controllers/post.controller");

const router = express.Router();

router.get("/", postController.getPosts);
router.get(
  "/:id",
  validate(postValidations.getPostById),
  postController.getPostById
);
router.post(
  "/",
  auth(),
  validate(postValidations.createPost),
  postController.createPost
);
router.put(
  "/",
  auth(),
  validate(postValidations.updatePost),
  postController.updatePost
);
router.delete(
  "/:id",
  auth(),
  validate(postValidations.deletePost),
  postController.deletePost
);

module.exports = router;
