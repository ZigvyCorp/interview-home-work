const { Router } = require("express");
const postPath = require("./posts/posts.path");
const commentPath = require("./comments/comments.path");
const userPath = require("./users/users.path");

const router = Router();

router
  .use("/users", userPath)
  .use("/comments", commentPath)
  .use("/posts", postPath)
  .use("*", (req, res, next) => {
    next({ statusCode: 404 });
  });
module.exports = { router };
