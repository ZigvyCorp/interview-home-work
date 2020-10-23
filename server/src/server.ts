import express from "express";
require("./app/db/mongoose");
const userRouter = require("./app/routes/user");
const postRouter = require("./app/routes/post");
const commentRouter = require("./app/routes/comment");

export const setUpServer = () => {
  const app = express();
  app.use(express.json());
  app.use(userRouter);
  app.use(postRouter);
  app.use(commentRouter);
  return app;
};

try {
  const app = setUpServer();
  app.listen(process.env.PORT);
} catch (e) {
  console.log("Can't start API Server", e);
}
