const express = require('express')
const { getAllPosts, getPostById, createPost, updatePostById, deletePostById } = require('../controllers/postController')
const { verifyToken } = require('../middlewares/authMiddleware')

const postRouter = express.Router()

postRouter.get('/', getAllPosts)
postRouter.get('/:postId', getPostById)
postRouter.post('/', verifyToken, createPost)
postRouter.put('/:postId', verifyToken, updatePostById)
postRouter.delete('/:postId/:userId', verifyToken, deletePostById)

module.exports = postRouter