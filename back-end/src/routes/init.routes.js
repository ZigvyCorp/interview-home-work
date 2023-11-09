const userRouter = require('./user.routes');
const postRouter = require('./post.routes');
const commentRouter = require('./comment.routes');


const initRoutes = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);
    app.use('/api/comments', commentRouter);

    app.use((err, req, res, next) => {
        const statsCode = err.status || 500;
        res.status(statsCode).json({
            status: "error",
            code: statsCode,
            message: err.message || "Internal server error",
        });
    });   
}

module.exports = initRoutes;