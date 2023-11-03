import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "../models/user";

export const SECRET_KEY: Secret = "super_secret";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;

    next();
  } catch (error) {
    if (error instanceof Error)
      return res.status(401).json({
        message: "Please authenticate",
        error,
      });
  }
};

export default auth;
