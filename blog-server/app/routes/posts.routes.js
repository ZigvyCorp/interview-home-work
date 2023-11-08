const router = require("express").Router();
const postsController = require("../controllers/posts.controller.js");

module.exports = (app) => {
  router.get("/", postsController.getAll);

  app.use("/api/posts", router);
};
