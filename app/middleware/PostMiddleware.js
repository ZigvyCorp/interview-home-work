const PostMiddleware = (request, response, next) => {
    console.log('Request Post Success on', request.url);
    next();
}

module.exports = { PostMiddleware }