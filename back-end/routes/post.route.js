var express = require('express');
const postController = require('../controllers/post.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.get('/:id/comments', postController.getCommentFromPost);

module.exports = router;
