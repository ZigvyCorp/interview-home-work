const router = require("express").Router();
const postsController = require("../controllers/posts.controller.js");

module.exports = (app) => {
  router.get("/", postsController.getPosts);
  router.get("/:postId", postsController.getById);
  router.get("/:postId/comments", postsController.getCommentByPostId);

  app.use("/api/posts", router);
};
