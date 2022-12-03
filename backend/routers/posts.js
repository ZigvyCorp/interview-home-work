const express = require("express");

const PostController = require('../controllers/posts')

const validateUpdatePost = require('../validators/post/updatePostValidator')
const validateNewPost = require('../validators/post//newPostValidator')

const router = express.Router()

router.post('/',  PostController.getPosts)

router.post('/:id', PostController.getPostById)

router.post('/create', validateNewPost.validateNewPost(), PostController.createPost)

router.post('/update/:id', validateUpdatePost.validateUpdatePost(), PostController.updatePost)

router.post('/delete/:id', PostController.deletePost)


module.exports = router