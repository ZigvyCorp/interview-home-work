const postRouter = require('./post')
const userRouter = require('./user')
const commentRouter = require('./comment')

const route = (app) => {

    app.use("/api/post", postRouter)
    app.use("/api/user", userRouter)
    app.use("/api/comment", commentRouter)
}

module.exports = route
