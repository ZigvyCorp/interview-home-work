var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller.js');

router.get('/', controller.getAllUser);

router.get('/:idU', controller.getUser);

router.get('/:idU/posts', controller.getAllPostByUser);

router.get('/:idU/posts/:idP', controller.getPostByUser);


module.exports = router;