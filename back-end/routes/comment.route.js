var express = require('express');
const commentController = require('../controllers/comment.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', commentController.getComments);

module.exports = router;
