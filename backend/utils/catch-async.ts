import { Request, Response, NextFunction } from "express";
type ControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;
const catchAsync = (fn: ControllerFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
