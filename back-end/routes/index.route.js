const express = require("express");
const postsRoute = require("../routes/posts.route");
const usersRoute = require("../routes/users.route");
const commentsRoute = require("../routes/comments.route");
const router = express.Router();

const defaultRoutes = [
  { path: "/posts", route: postsRoute },
  { path: "/users", route: usersRoute },
  { path: "/comments", route: commentsRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
