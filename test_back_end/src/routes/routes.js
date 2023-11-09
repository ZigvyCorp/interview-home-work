const express = require('express');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

const router = express.Router();
router.get('/posts', postController.getAllPosts);

router.get('/comments', commentController.getAllComments);

module.exports = router;