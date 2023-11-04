var express = require('express');
var router = express.Router();
const postController = require("../controllers/postController");


router
  .route("/")
  .get(postController.getPostByPage)

module.exports = router;
