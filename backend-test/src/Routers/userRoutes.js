import express from "express";
import { getAllUser, getAllUserId } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/getAllUser", getAllUser);
userRouter.get("/getAllUserById/:id", getAllUserId);


export default userRouter;
