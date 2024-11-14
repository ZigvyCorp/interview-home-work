import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import HTTP_NAME from "../constants/httpName";
import HTTP_STATUS from "../constants/httpStatus";
import {
  defaultErrorHandler,
  defaultSuccessHandler,
  wrapRequestHandler,
} from "../utils/errorBoundary";
import { Users } from "../models/users.model";
import { createRefreshToken } from "../services/refreshToken";

export const signUp = wrapRequestHandler(async (req, res) => {
  if (!req.body?.password && req.body?.password.length <= 6) {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.BAD_REQUEST,
        message: "Password must be longer than 6 characters",
        name: HTTP_NAME.BAD_REQUEST,
      },
      res
    );
  }
  console.log(new Date().getTime());

  const createdUser = await Users.create({
    _id: new mongoose.Types.ObjectId(),
    username: req.body?.username,
    name: req.body?.name,
    dob: req.body?.dob,
    password: bcrypt.hashSync(req.body?.password, 6),
    created_at: new Date().getTime(),
  });
  return defaultSuccessHandler(
    res,
    createdUser,
    HTTP_STATUS.CREATED,
    "Sign up successfully"
  );
});

export const logIn = wrapRequestHandler(async (req, res) => {
  // Tìm trong Users bằng email
  const isExistUser = await Users.findOne({
    username: req.body?.username,
  });
  if (!isExistUser) {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.NOT_FOUND,
        message: "User not found",
        name: HTTP_NAME.NOT_FOUND,
      },
      res
    );
  }

  // Check password
  const isCorrectPassword = bcrypt.compareSync(
    req.body.password,
    isExistUser.password
  );
  if (!isCorrectPassword) {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.UNAUTHORIZED,
        message: "Password is not correct",
        name: HTTP_NAME.UNAUTHORIZED,
      },
      res
    );
  }
  // tạo token
  const secretKey = process.env.JWT_SECRET || "ZIGVYBE";
  const token = jwt.sign({ _id: isExistUser._id }, secretKey, {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: Number(process.env.JWT_EXPIRATION) || 86400, // 1 ngày
  });
  // Tạo thêm refreshToken
  const refreshToken = await createRefreshToken(isExistUser);
  return defaultSuccessHandler(
    res,
    {
      accessToken: token,
      refreshToken: refreshToken,
      account: isExistUser,
    },
    HTTP_STATUS.OK,
    "Log In Successfully"
  );
});

export const getAllUsers = wrapRequestHandler(async (req, res) => {
  const users = await Users.find();
  if (users?.length) {
    return defaultSuccessHandler(
      res,
      users,
      HTTP_STATUS.OK,
      "Get all users successfully"
    );
  } else {
    return defaultErrorHandler(
      {
        status: HTTP_STATUS.NOT_FOUND,
        message: "Not found any users",
        name: HTTP_NAME.NOT_FOUND,
      },
      res
    );
  }
});
