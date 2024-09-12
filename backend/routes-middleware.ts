import { Express, Request, Response, NextFunction } from "express";
import { CommentRouter, PostRouter, UserRouter } from "./routes";
import { NotFoundError } from "./utils/app-error";

const routes = (app: Express) => {
  app.use("/api/posts", PostRouter);

  app.use("/api/users", UserRouter);

  app.use("/api/comments", CommentRouter);
  //   global error handler
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError(`${req.originalUrl} not found on this server.`));
  });
  // reviews
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Something went wrong", err);
  });
};

export default routes;
