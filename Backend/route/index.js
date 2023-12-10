
const postRouter = require('./post.route')
const commentRouter = require('./comment.route')
const userRouter = require('./user.route')
const verifyToken = require('../middleware/verifyToken')

function routes(app) {
    app.use('/api/v1/post', verifyToken, postRouter)
    app.use('/api/v1/comment', verifyToken, commentRouter)
    app.use('/api/v1/user', userRouter)
}

module.exports = routes