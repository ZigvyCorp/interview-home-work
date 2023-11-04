var express = require('express');
var router = express.Router();
const commentController = require("../controllers/commentController");


router
  .route("/")
  .get(commentController.getCommentByPostId)

module.exports = router;
