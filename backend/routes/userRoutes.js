import express from "express";
import { login, register } from "../controllers/userController.js";

const routesUser = express.Router();

routesUser.post("/register", register);
routesUser.post("/login", login);

export default routesUser;
