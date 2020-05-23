import { Request, Response, NextFunction } from "express-serve-static-core";
import jwt from "jsonwebtoken";
import User from "../models/user";

const auth = async (req: Request | any, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!user) {
      res.status(400).send("Dont have permission");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Dont have permission final");
  }
};

export default auth;
