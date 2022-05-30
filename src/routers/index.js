const postsRouter = require('./posts');
const siteRouter = require('./site');
const meRouter = require('./me');
function router(app) {
    // me
    app.use('/me', meRouter);
    // posts
    app.use('/posts', postsRouter);
    // home
    app.use('/', siteRouter);
}
module.exports = router;
