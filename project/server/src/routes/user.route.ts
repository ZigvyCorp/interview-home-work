
import express from "express";
import userController from "../controllers/user.controller";
import auth from "../middleware/auth.middleware";

const userRouter = express.Router();
userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.signIn);
userRouter.delete("/logout",auth, userController.logout);
userRouter.post("/refreshtoken",auth, userController.refreshToken);
// router.post("/login", userController.login);
userRouter.get("/info",auth, userController.info);

export default userRouter;