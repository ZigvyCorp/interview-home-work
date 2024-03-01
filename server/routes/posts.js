const api = require("express").Router();
const postController = require("../controllers/postController");

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

api.get("/api/posts", use(postController.getPosts));
api.get("/api/posts/:id/comments", use(postController.getPostComments));

module.exports = api;
