import { NextFunction, Request, Response, Router } from "express";
import { PostService } from "../services";

export class PostController {
  get routes() {
    const router = Router();

    router.post("/", this.createPost);

    return router;
  }

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
