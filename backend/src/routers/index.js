const postRouter = require("./post");
const userRouter = require("./user");
const commentRouter = require("./comment");

const initRoutes = (app) => {
  app.use("/api/v1/posts", postRouter);
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/comments", commentRouter);
};

module.exports = initRoutes;