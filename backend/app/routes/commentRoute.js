const express = require('express')
const { getAllComments, updateCommentById, deleteCommentById, getCommentsOfPost, createComment } = require('../controllers/commentController')
const { verifyToken } = require('../middlewares/authMiddleware')


const commentRouter = express.Router()


commentRouter.get('/', getCommentsOfPost)
commentRouter.post('/', verifyToken, createComment)
commentRouter.put('/:commentId', verifyToken, updateCommentById)
commentRouter.delete('/:commentId/:userId', verifyToken, deleteCommentById)

module.exports = commentRouter