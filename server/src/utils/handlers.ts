import { NextFunction, Request, RequestHandler, Response } from 'express';
import pick from 'lodash/pick';

export const wrapRequestHandler = <P>(func: RequestHandler<P, any, any, any>) => {
  return async (req: Request<P>, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

type FilterKeys<T> = Array<keyof T>;

export const filterReqBodyMiddleware =
  <T>(filterKeys: FilterKeys<T>) =>
  (req: Request, _: Response, next: NextFunction) => {
    req.body = pick(req.body, filterKeys);
    next();
  };
