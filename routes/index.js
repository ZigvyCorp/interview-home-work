const commentRoute = require('./comments');
const postRoute = require('./posts');
const userRoute = require('./users');

function route(app){
    app.use('/api/comments',commentRoute);
    app.use('/api/posts',postRoute);
    app.use('/api/users',userRoute);
}

module.exports = route;