import { NextFunction, Request, Response, Router } from "express";
import { FilterRequest } from "../models/requests/filter-request";
import { FilterResponse } from "../models/response/filter-response";
import { CommentService } from "../services";

export class CommentController {
  get routes() {
    const router = Router();

    router.delete("/:id", this.deleteComment);
    router.patch("/:id", this.updateComment);
    router.get("/", this.getComments);
    router.post("/", this.comment);

    return router;
  }

  deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        user,
        params: { id },
      } = req;
      const updatedPost = await CommentService().deleteComment(id, user);
      res.json(updatedPost);
    } catch (error) {
      next(error);
    }
  };

  updateComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        user,
        params: { id },
        body: { content },
      } = req;
      if (!content)
        return res.status(400).json({
          message: "Cannot update empty content",
        });
      const updatedComment = await CommentService().updateComment(
        id,
        content,
        user
      );
      res.json(updatedComment);
    } catch (error) {
      next(error);
    }
  };

  getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        query: { postId, ...restQuery },
      } = req;
      if (!postId)
        return res.status(400).json({
          message: "Missing post ID",
        });
      const filter = new FilterRequest();
      filter.key = restQuery.key as string;
      filter.page = parseInt((restQuery.page as string) || "0");
      filter.pageSize = parseInt((restQuery.pageSize as string) || "10");
      const [comments, total] = await CommentService().getComments(
        postId as string,
        filter
      );
      const response = new FilterResponse();
      (response.data = comments as any[]),
        (response.metadata = {
          ...filter,
          total: total as number,
        });
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  comment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        user,
        body: { data, postId },
      } = req;
      const [comment, post] = await CommentService().comment(
        postId,
        data,
        user
      );
      res.json({
        comment,
        post,
      });
    } catch (error) {
      next(error);
    }
  };
}
