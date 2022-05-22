const UserMiddleware = (request, response, next) => {
    console.log('Request User Success on', request.url);
    next();
}

module.exports = { UserMiddleware }