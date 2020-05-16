import { NextFunction, Request, Response, Router } from "express";
import { FilterRequest } from "../models/requests/filter-request";
import { FilterResponse } from "../models/response/filter-response";
import { PostService } from "../services";

export class PostController {
  get routes() {
    const router = Router();

    router.delete("/:id", this.deletePost);
    router.patch("/:id", this.updatePost);
    router.get("/:id", this.getPostDetails);
    router.post("/", this.createPost);
    router.get("/", this.getPosts);

    return router;
  }

  deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        params: { id },
        user,
      } = req;
      if (!user)
        return res.json(401).json({
          message: "Unauthorized",
        });
      await PostService().deletePost(id, user);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

  updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      if (!user)
        return res.json(401).json({
          message: "Unauthorized",
        });
      const { id } = req.params;
      const data = req.body;
      const updatedPost = await PostService().updatePost(id, data, user);
      res.json(updatedPost);
    } catch (error) {
      next(error);
    }
  };

  getPostDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { withAuthor } = req.query;
      const post = await PostService().getPostDetails(
        id,
        withAuthor === "true"
      );
      res.json(post);
    } catch (error) {
      next(error);
    }
  };

  getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.query as any;
      filter.page = parseInt(filter.page || "0");
      filter.pageSize = parseInt(filter.pageSize || "10");
      const [posts, total] = await PostService().getPosts(filter);
      const response = new FilterResponse();
      response.data = posts as any[];
      response.metadata = {
        ...(filter || new FilterRequest()),
        total: total as number,
      };
      res.json(response);
    } catch (error) {
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
      next(error);
    }
  };
}
