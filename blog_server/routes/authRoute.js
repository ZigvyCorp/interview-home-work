import express from "express";
import { authController } from "../controllers/index.js";

const authRoute = express.Router();

authRoute.post("/register", authController.register);
authRoute.post("/login", authController.login);
authRoute.get("/logout", authController.logout);

export default authRoute;
