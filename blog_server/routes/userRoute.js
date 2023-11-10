import express from "express";
import { userController } from "../controllers/index.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.put("/me/update", isAuthenticatedUser, userController.updateUser);
userRouter.get(
  "/count-user",
  isAuthenticatedUser,

  userController.getCountAllUser
);

userRouter.post("/change-password", userController.forgotPassword);
userRouter.get("/all", isAuthenticatedUser, userController.getAllUser);

userRouter.get("/me/:id", isAuthenticatedUser, userController.getUserDetails);
userRouter.put(isAuthenticatedUser, userController.updatePassword);
userRouter.put("/password/reset/:token", userController.resetPassword);
userRouter.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  userController.getOneUser
);

userRouter.patch(
  "/admin/user/updatestatus/:id",
  isAuthenticatedUser,
  userController.updateUserStatus
);
export default userRouter;
