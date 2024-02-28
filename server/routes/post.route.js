const router = require('express').Router()
const PostController = require('../controllers/post.controller')

router.post('/', PostController.searchPosts)
router.get('/:id', PostController.searchPost)
router.post('/:id/comments', PostController.searchPostComments)

module.exports = router