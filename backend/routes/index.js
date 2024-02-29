module.exports = (app) => {
  app.use("/api/v1/", require("./auth.routes"));
  app.use("/api/v1/users", require("./users.routes"));
  app.use("/api/v1/posts", require("./posts.routes"));
  app.use("/api/v1/comments", require("./comments.routes"));
};
