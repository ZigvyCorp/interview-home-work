const blogRouter = require("./blogRoute");
const middlewareController = require("../app/controllers/middlewareController");
function route(app) {
  app.use("/v1/blogs", middlewareController.middlewareCORS, blogRouter);
}
module.exports = route;
