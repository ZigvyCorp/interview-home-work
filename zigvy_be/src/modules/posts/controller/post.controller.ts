import express, { Express, Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

import { POST_SCHEMA } from "../model";
import { ErrorHandler } from "../../../utils/errorHandler";

// import { ErrorHandler } from "../utils/errorHandler";

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = POST_SCHEMA.find();

    const result = await query.exec();

    if (result) {
      res.status(200).json({
        status: 200,
        data: result,
      });
    }
  } catch (error: any) {
    const err = new ErrorHandler(error.message, httpStatus.UNPROCESSABLE_ENTITY, true);
    return next(err);
  }
};
