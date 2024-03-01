const express = require('express')
const CommentController = require('../controllers/CommentController')
const router = express.Router()

router.get('/post/:id', CommentController.getCommentByPost)

module.exports = router
