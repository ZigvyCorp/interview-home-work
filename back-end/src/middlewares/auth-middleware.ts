import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "@/types";


const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.cookies?.accessToken;
  if (!token) {
    res.status(401).json({ message: "Access token required" });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: string | jwt.JwtPayload | undefined) => {
    if (err) {
      res.status(401).json({ message: "Invalid or expired token" });
      return;
    }
    const payload = decoded as any;
    req.user = {
      username: payload.username,
      id: payload.userId
    }; // Store decoded payload in req.user
    next();
  });
};
export default authMiddleware;