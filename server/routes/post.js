const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');


router.get('/:id/comments',PostController.getCommentsInPost());
router.get('/:id',PostController.getPostById());
router.get('/',PostController.getPosts());
router.get('/',PostController.getPostsAndPaginate());


module.exports = router;