module.exports = function (app) {
  let postRouteController = require("./postRouteController");

  // todoList Routes
  app
    .route("/posts")
    .get(postRouteController.getPosts)
    .post(postRouteController.addPost);

  app
    .route("/posts/:postId")
    .get(postRouteController.getDetailedPost)
    .put(postRouteController.update)
    .delete(postRouteController.delete);
};
