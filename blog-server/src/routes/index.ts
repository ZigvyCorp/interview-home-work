import postRoutes from "./postRoutes";
import { notFound, errorHandler } from "../middlewares/errors";
import { Application, Request, Response } from "express";
const routes = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    try {
      res.json("Hello World");
    } catch (error) {
      console.log("error", error);
    }
  });
  app.use("/api/posts", postRoutes);

  app.use(notFound);
  app.use(errorHandler);
};
export default routes;
