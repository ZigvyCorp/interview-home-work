const express = require('express')
const router = express.Router()

const userRouter = require('./User.route')
const postRouter = require('./Post.route')
const commentRouter = require('./Comment.route')



router.use('/users', userRouter)

router.use('/posts', postRouter)

router.use('/comments', commentRouter)



module.exports = router