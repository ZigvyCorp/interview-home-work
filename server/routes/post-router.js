const express = require('express');

const PostControl = require('../controllers/post-controller');

const router = express.Router();

router.get('/posts', PostControl.getAllPosts);
router.get('/posts/:id', PostControl.getPostsById);
router.get('/users/:id', PostControl.getUserById);
//router.get('/posts/:id/comments')
//router.get('/comments?postId=:id')
//router.post('/posts')
//router.put('/posts/:id')
//router.patch('/posts/:id')
//router.delete('/posts/:id')

module.exports = router