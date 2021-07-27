import express from "express";

import userController from "../controllers/user.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/refresh_token", userController.getAccessToken);
router.get("/info", auth, userController.getUserInfo);
router.get("/logout", userController.logout);


export default router;