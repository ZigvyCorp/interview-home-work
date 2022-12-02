const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

router.post('/create', PostController.createPost);
router.get('/search', PostController.searchPosts);
router.get('/all', PostController.getPosts);
router.get('/:id', PostController.getPostById);
router.get('/:id/comments', PostController.getCommentsInPost);
router.get('/', PostController.getPostsAndPaginate);

module.exports = router;
