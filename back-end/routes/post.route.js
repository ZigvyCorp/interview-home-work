var express = require('express');
const postController = require('../controllers/post.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', postController.getPosts);

module.exports = router;
