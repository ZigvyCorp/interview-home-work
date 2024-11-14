import express from "express";
import { checkDuplicateUsername } from "../middlewares/auth.middleware";
import { getAllUsers, logIn, signUp } from "../controllers/users.controller";

const userRouter = express.Router();

userRouter.post("/signup", checkDuplicateUsername, signUp);
userRouter.post("/login", logIn);
userRouter.get("/users", getAllUsers);
export default userRouter;
