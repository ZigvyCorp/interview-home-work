const  express = require("express");

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

let router = express.Router();

let initWebRoutes = (app) => {
  router.use("/api/posts", postRoutes);
  router.use("/api/users", userRoutes);
  router.use("/api/comments", commentRoutes);

  return app.use("/", router);
};

module.exports = initWebRoutes;
