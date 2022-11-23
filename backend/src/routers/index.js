const express = require("express");
const authRoute = require("./auth.route");
const postRoute = require("./post.route");
const commentRoute = require("./comment.route");

const router = express.Router();

const defaultRouter = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/posts",
    route: postRoute,
  },
  {
    path: "/comments",
    route: commentRoute,
  },
];

defaultRouter.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
