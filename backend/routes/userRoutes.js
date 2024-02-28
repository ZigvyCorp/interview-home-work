import express from "express";
import { createUser } from "../controllers/userController.js";

const routesUser = express.Router();

routesUser.post("/", createUser);

export default routesUser;
