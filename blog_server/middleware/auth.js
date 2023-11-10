import "dotenv/config";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";
import ErrorHandler from "../utills/errorHandle.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Vui lòng đăng nhập để booking", 401));
  }

  const decodedToken = await jwt.verify(token, process.env.SECRET_KEY_TOKEN);

  const user = await UserModel.findById(decodedToken.id);

  if (!user) return res.send("Error");

  req.user = user;
  next();
});

export const authorizeRoles = () => {
  return (req, res, next) => {
    if (req.user.role !== "admin") {
      return next(new ErrorHandler(`Role  is not allowed`));
    }

    next();
  };
};
