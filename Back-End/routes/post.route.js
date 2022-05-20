var express = require('express');
var router = express.Router();
var controller = require('../controllers/post.controller.js');

router.get('/', controller.getPosts);


module.exports = router;