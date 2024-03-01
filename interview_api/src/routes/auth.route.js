import express from "express";
import { handleLogin } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post('/login', [handleLogin])
authRouter.post('/logout', [handleLogin])
