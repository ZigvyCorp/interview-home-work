import postRouter from './post'
import commentRouter from './comment'
import userRouter from './user'

const initRoutes = (app) => {
    app.use('/api/v1/posts', postRouter)
    app.use('/api/v1/comments', commentRouter)
    app.use('/api/v1/users', userRouter)

    return app.use('/', (req, res) => {
        res.send('server on');
    })
}

export default initRoutes