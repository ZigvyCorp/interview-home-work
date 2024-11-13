import { NextFunction, Request, Response } from 'express';
import { isObjectIdOrHexString } from 'mongoose';

export function isValidObjectId(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  return isObjectIdOrHexString(id) ? next() : res.sendStatus(400);
}