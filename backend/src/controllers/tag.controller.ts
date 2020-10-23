import { NextFunction, Request, Response, Router } from "express";
import { FilterRequest } from "../models/requests/filter-request";
import { FilterResponse } from "../models/response/filter-response";
import { TagService } from "../services";

export class TagController {
  get routes() {
    const router = Router();

    router.post("/", this.addTag);
    router.get("/suggestions", this.getTagSuggestions);

    return router;
  }

  addTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      const tag = await TagService().addTag(name);
      res.json(tag);
    } catch (error) {
      next(error);
    }
  };

  getTagSuggestions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const filter = req.query as any;
      filter.page = parseInt(filter.page || "0");
      filter.pageSize = parseInt(filter.pageSize || "10");
      const [tags, total] = await TagService().getTags(filter);
      const response = new FilterResponse();
      response.data = tags as any[];
      response.metadata = {
        ...(filter || new FilterRequest()),
        total: total as number,
      };
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}
