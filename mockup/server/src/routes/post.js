const express = require('express')
const PostController = require('../controllers/PostController')
const router = express.Router()

router.get('/', PostController.getAllPosts)
router.get('/:id', PostController.getPostById)
router.post('/search', PostController.searchPost)

module.exports = router
