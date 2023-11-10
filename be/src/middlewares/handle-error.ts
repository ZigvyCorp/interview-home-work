import type { Request, Response, NextFunction } from "express";

import { StatusCodes } from "http-status-codes";

class AppException extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

const HandleErrorNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new AppException(StatusCodes.NOT_FOUND, "Not Found");
  next(error);
};

const ErrorHandler = (
  err: AppException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    status: errStatus,
    message: errMsg,
  });
};

export { HandleErrorNotFound, ErrorHandler };
