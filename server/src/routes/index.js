const express = require('express');
const commentsRoute = require('../modules/comments/routes/comments.route');
const postsRoute = require('../modules/posts/routes/posts.route');
const usersRoute = require('../modules/users/routes/users.route');
const homepageRoute = require('../modules/homepage/routes/homepage.route')
const router = express.Router();

/* GET home page. */
const defaultRoutes = [
  {
    path: '/comments',
    route: commentsRoute
  },
  {
    path: '/posts',
    route: postsRoute
  },
  {
    path: '/users',
    route: usersRoute
  },
  {
    path: '/',
    route: homepageRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
