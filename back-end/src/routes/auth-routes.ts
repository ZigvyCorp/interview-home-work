import express from "express";
import {
  getLoggedUserRequest,
  loginRequest, logoutRequest,
  refreshTokenRequest,
  registerRequest
} from "@/controllers/auth-controller";
import authMiddleware from "@/middlewares/auth-middleware";

const router = express.Router();
router.post("/register", registerRequest);
router.post("/login", loginRequest);
router.post("/logout", logoutRequest);
router.post("/refresh-token", refreshTokenRequest);
router.get("/logged-user", authMiddleware, getLoggedUserRequest  );

export default router;