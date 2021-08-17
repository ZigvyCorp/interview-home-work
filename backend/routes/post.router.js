const express = require('express');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/posts', postController.getPosts);
router.get('/search', postController.searchPost);
router.get('/post/:id', postController.getPost);

module.exports = router;
