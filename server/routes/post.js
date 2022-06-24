const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');


router.post('/create',PostController.createPost);
router.post('/autoInsert',PostController.insertPosts);
router.get('/:id',PostController.getPostById);
router.get('/:id/comments',PostController.getCommentsInPost);
router.post('/',PostController.searchPosts);
router.get('/',PostController.getPosts);
router.get('/',PostController.getPostsAndPaginate);


module.exports = router;