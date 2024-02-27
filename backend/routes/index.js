const { notFound, errHandler } = require("../middlewares/errHandler");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const commentRouter = require("./commentRouter");

const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/post", postRouter);
  app.use("/api/comment", commentRouter);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
