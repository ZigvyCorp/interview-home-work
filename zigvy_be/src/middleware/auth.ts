import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import express, { Express, Request, Response, NextFunction } from "express";
// import User from "../model/usersModel";
import { ErrorHandler } from "../utils/errorHandler";

// export const isAuth = async (req: any, res: any, next: any) => {
//   const token = req.headers && req.headers.authorization?.split(" ")[1];
//   try {
//     if (!token) {
//       return next(new ErrorHandler("Please Login to Access", 401, res));
//     }
//     const dataVerify: any = jwt.verify(token, process.env.JWT_SECRET!);
//     req.user = await User.findById(dataVerify.user.id);
//     next();
//   } catch (error: any) {
//     const err = new ErrorHandler(error.message, httpStatus.UNPROCESSABLE_ENTITY, true);
//     return next(err);
//   }
// };

// export const isAdmin = async (req: any, res: any, next: any) => {
//   const token = req.headers && req.headers.authorization!.split(" ")[1];
//   const dataVerify: any = jwt.verify(token, process.env.JWT_SECRET!);
//   const user = await User.findById(dataVerify.user.id);
//   // console.log({u: user})
//   try {
//     if (user?.isAdmin === false) {
//       return next(new ErrorHandler("Access denied, you must be an admin", 401, res));
//     }
//     next();
//   } catch (error: any) {
//     const err = new ErrorHandler(error.message, httpStatus.UNPROCESSABLE_ENTITY, true);
//     return next(err);
//   }
// };
