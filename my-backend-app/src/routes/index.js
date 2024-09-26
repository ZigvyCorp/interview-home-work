const UserRouter = require("./UserRouter");
const PostRouter = require("./PostRouter");
const CommentRouter = require("./CommentRouter");

const routers = (app) => {
  app.use("/api/user", UserRouter);
  app.use("/api/user", PostRouter);
  app.use("/api/user", CommentRouter);
};

module.exports = routers;
