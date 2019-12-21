const ApiRouter = require("express").Router();

ApiRouter.use("/comments", require('./comments/CommentsHandler'));
ApiRouter.use("/posts", require('./posts/PostsHandler'));
ApiRouter.use("/sessions", require('./session/SessionHandler'));
ApiRouter.use("/users", require('./users/UsersHandler'));

ApiRouter.get("/", (req, res) => {
  return res.send({
    msg: "You know, for club backend!"
  });
});

module.exports = ApiRouter;
