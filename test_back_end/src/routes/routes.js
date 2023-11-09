const express = require('express');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');

const router = express.Router();
router.get('/posts', postController.getAllPosts);

router.get('/comments', commentController.getAllComments);

router.get('/users', userController.getAllUser);

router.post('/getCommentsByPostId', commentController.getCommentsByPostId);


module.exports = router;