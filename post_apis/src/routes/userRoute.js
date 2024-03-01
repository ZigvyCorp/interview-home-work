import express from "express";
import { createNewUser, getUsers } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/createUser", createNewUser);
userRoute.get("/getUsers", getUsers);

export default userRoute;
