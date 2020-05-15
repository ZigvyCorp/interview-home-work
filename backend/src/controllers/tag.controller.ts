import { NextFunction, Request, Response, Router } from "express";
import { TagService } from "../services";

export class TagController {
  get routes() {
    const router = Router();

    router.post("/", this.addTag);

    return router;
  }

  addTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tagName: string = req.body;
      const tag = await TagService().addTag(tagName);
      res.json(tag);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
