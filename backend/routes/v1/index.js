const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const postRoute = require('./post.route.js');


const routes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/posts',
        route: postRoute
    }
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;