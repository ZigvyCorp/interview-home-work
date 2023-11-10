const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const postRoute = require('./post.route.js');
const commentRoute = require('./comment.route.js');

const routes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/posts',
        route: postRoute
    },
    {
        path: '/comments',
        route: commentRoute
    }
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;