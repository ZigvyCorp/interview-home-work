import { NextFunction, Request, Response, Router } from "express";
import { FilterRequest } from "../models/requests/filter-request";
import { FilterResponse } from "../models/response/filter-response";
import { PostService } from "../services";

export class PostController {
  get routes() {
    const router = Router();

    router.post("/", this.createPost);
    router.get("/", this.getPosts);

    return router;
  }

  getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.query as any;
      filter.page = parseInt(filter.page || "0");
      filter.pageSize = parseInt(filter.pageSize || "10");
      const [posts, total] = await PostService().getPost(filter);
      const response = new FilterResponse();
      response.data = posts as any[];
      response.metadata = {
        ...(filter || new FilterRequest()),
        total: total as number,
      };
      res.json(response);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      if (!data.title)
        return res.status(400).json({
          message: "Missing post title",
        });
      if (!data.content)
        return res.status(400).json({
          message: "Missing post content",
        });
      const post = await PostService().createPost(data, req.user);
      res.json(post);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
