import { Response, NextFunction } from "express";
import HTTP_STATUS from "../constants/httpStatus";

type RequestHandler = (
  req: any,
  res: Response,
  next?: any
) => Promise<void | Response<any, Record<string, any>>>;

interface ErrorWithStatus extends Error {
  status?: number;
}

export const defaultErrorHandler = (error: ErrorWithStatus, res: Response) => {
  return res.status(error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    message: error.message,
    error: error,
  });
};

export const wrapRequestHandler = (func: RequestHandler) => {
  return async (req: any, res: Response, next?: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      defaultErrorHandler(error as ErrorWithStatus, res);
    }
  };
};

export const defaultSuccessHandler = (
  res: Response,
  data: any,
  status: number,
  message: string,
  count?: number
) => {
  return res.status(status).json({
    status,
    message,
    count: count || 1,
    data,
  });
};
