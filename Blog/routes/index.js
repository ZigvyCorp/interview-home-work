import { userRouter } from "./users.js";
import { commentRouter } from "./comments.js";
import { postRouter } from "./posts.js";

export function Route(app) {
  //Routes Post
  app.use("/post", postRouter);

  //Routes Comment
  app.use("/comment", commentRouter);

  //Coutes user
  app.use("/user", userRouter);
}
