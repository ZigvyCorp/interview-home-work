import { Document } from "mongoose";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export type MongoDocument<T extends Record<string, any>> = Document<unknown, {}, T>

export type TimeStamps = {
  createdAt?: Date;
  updatedAt?: Date;
}
export interface AuthenticatedRequest extends Request {
  user?: JwtPayload | string;
}