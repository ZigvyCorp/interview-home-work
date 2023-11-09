import type { Request, Response, NextFunction } from "express";

export type HandleFunc = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
