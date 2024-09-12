import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catch-async";
import User from "../models/user.model";

// create multiples user for mocking data
export const createUsers = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    try {
      const newUser = await User.insertMany(req.body);

      res.status(201).json({
        status: "success",
        data: {
          users: newUser,
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
