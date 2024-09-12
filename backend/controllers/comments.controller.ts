import { NextFunction, Request, Response } from "express";

import Comments from "../models/comment.model";
import catchAsync from "../utils/catch-async";

// create multiples user for mocking data
export const createComments = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    try {
      const newComments = await Comments.insertMany(req.body);

      res.status(201).json({
        status: "success",
        data: {
          comments: newComments,
        },
      });
    } catch (error) {
      const err = error as { message: string };
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }
);
