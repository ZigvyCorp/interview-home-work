import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response ,NextFunction} from 'express';
import 'dotenv/config'

export interface CustomRequest extends Request {
  token: any | JwtPayload;
 }
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace('Bearer ', '');
    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    req.user = decoded;
    console.log(decoded);

    next();
  } catch (err) {
    res.status(401).send('Please authenticate');
  }
 };
export default auth;
