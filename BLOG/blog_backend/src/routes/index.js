const postRouter = require("./post-route");
const commentRouter = require("./comment-route");
const userRouter = require("./user-route");

const routes = (app) => {
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/comment", commentRouter);
};

module.exports = routes;
