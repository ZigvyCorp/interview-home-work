import jwt, { JwtPayload } from "jsonwebtoken";
import HTTP_NAME from "../constants/httpName";
import HTTP_STATUS from "../constants/httpStatus";
import { Users } from "../models/users.model";
import {
  defaultErrorHandler,
  wrapRequestHandler,
} from "../utils/errorBoundary";

export const verifyToken = wrapRequestHandler(async (req, res, next) => {

  let token = req.headers["x-access-token"];

  if (!token) {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.UNAUTHORIZED,
        message: "Not found any token",
        name: HTTP_NAME.UNAUTHORIZED,
      },
      res
    );
  }
  // check expiredToken
  const decodedToken = (await jwt.decode(token)) as JwtPayload | null;
  if (decodedToken && decodedToken.exp) {
    const accessTokenExpireTime = decodedToken.exp * 1000;
    const timeNow = new Date();

    if (accessTokenExpireTime < timeNow.getTime()) {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.UNAUTHORIZED,
          message: "Token Expired",
          name: HTTP_NAME.UNAUTHORIZED,
        },
        res
      );
    }

    const secretKey = process.env.JWT_SECRET as string;
    const verified = (await jwt.verify(token, secretKey)) as JwtPayload;

    console.log(verified);

    if (!verified) {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.UNAUTHORIZED,
          message: "Token Invalid",
          name: HTTP_NAME.UNAUTHORIZED,
        },
        res
      );
    } else {
      const user = await Users.findById(verified.id);
      req.user = user; // Attach user to the request object
      next();
    }
  } else {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.UNAUTHORIZED,
        message: "Invalid token format",
        name: HTTP_NAME.UNAUTHORIZED,
      },
      res
    );
  }
});
export const checkDuplicateUsername = wrapRequestHandler(
  async (req, res, next) => {
    if (!req.body?.username) {
      return defaultErrorHandler(
        {
          status: HTTP_STATUS.UNAUTHORIZED,
          message: "Username must be filled",
          name: HTTP_NAME.UNAUTHORIZED,
        },
        res
      );
    } else {
      const isExistUser = await Users.findOne({
        username: req.body?.username,
      });
      if (isExistUser) {
        return defaultErrorHandler(
          {
            status: HTTP_STATUS.UNAUTHORIZED,
            message: "User is already existed",
            name: HTTP_NAME.UNAUTHORIZED,
          },
          res
        );
      }
      next();
    }
  }
);
