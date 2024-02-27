var express = require("express");
const postController = require("../controllers/postController");

const postRouter = express.Router();

postRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get(postController.get);

postRouter.route("/search").get(postController.searchPosts);
postRouter.route("/:id").get(postController.getPostByID);

module.exports = postRouter;
