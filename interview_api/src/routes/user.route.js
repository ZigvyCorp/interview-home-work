import express from "express";
import { handleGetUserInfo } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get('/info', handleGetUserInfo)
