import express from "express";
import { loginRequest, refreshTokenRequest, registerRequest } from "@/controllers/auth-controller";

const router = express.Router();
router.post("/register", registerRequest);
router.post("/login", loginRequest as any);
router.post("/refresh-token", refreshTokenRequest);

export default router;