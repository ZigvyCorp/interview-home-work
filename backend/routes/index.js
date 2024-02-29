const fakeDataRouter = require("./fakeData");
const postRouter = require("./posts");
const commentRouter = require("./comments");

// const router = require("express").Router();

const { notFound, errHandler } = require("../middleware/errHandler");

const initRoutes = (app) => {
  app.use("/api/posts", postRouter);
  app.use("/api/comments", commentRouter);

  app.use("/api/fake-data", fakeDataRouter);

  //routes handler when error
  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
