const postRouter = require("./post");

const initRoutes = (app) => {
  app.use("/api/v1/posts", postRouter);
};

module.exports = initRoutes;