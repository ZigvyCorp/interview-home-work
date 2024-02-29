const express = require('express')
const router = express.Router()
const commentController = require('../controller/commentController')

router.get('', commentController.index)
router.get('/get-comments/:postId', commentController.getCommentByPost)

router.post('/create-comment/:postId', commentController.createComment)

module.exports = router