const PostRouter = require("./Post.Route");

const route = (app: any) => {
  app.use("/posts", PostRouter);
};
export default route;
