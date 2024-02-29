import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return next(res.status(err.statusCode).json(err.serialize()));
  }
  return next(
    res.status(400).json({ status_code: 400, message: `${err.message}` })
  );
};
