const express = require('express')
const PostController = require('../app/controllers/PostController')
const router = express.Router()

router.get('/', PostController.getPosts)
router.get('/:id', PostController.getPost)

module.exports = router
