import { NextFunction, Request, Response } from "express";

const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
};
export default errorHandlerMiddleware;