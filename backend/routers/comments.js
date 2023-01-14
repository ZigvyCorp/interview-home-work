const express = require("express");

const CommentController = require('../controllers/comments')

const validateNewComment = require('../validators/comment/newCommentValidator')
const validateUpdateComment = require('../validators/comment/updateCommentValidator')

const router = express.Router()

router.post('/:postId',  CommentController.getCommentsByPostId)

router.post('/create', validateNewComment.validateNewComment(), CommentController.createComment)

router.post('/update/:id', validateUpdateComment.validateUpdateComment(), CommentController.updateComment)

router.post('/delete/:id', CommentController.deleteComment)


module.exports = router