import express from "express";
import { getAllUsers, getUserById } from "../controllers/user.c.js";

export const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
