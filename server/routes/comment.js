var express = require("express");
const commentController = require("../controllers/commentController");

const commentRouter = express.Router();

commentRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get(commentController.get);

module.exports = commentRouter;
