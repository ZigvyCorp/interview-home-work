const express = require("express");
const validate = require("./../middlewares/validate");
const auth = require("./../middlewares/auth");
const commentValidations = require("./../validations/comment.validation");
const commentController = require("./../controllers/comment.controller");
const router = express.Router();

router.get(
  "/",
  validate(commentValidations.getComments),
  commentController.getComments
);
router.post(
  "/",
  auth(),
  validate(commentValidations.createComment),
  commentController.createComment
);

module.exports = router;
