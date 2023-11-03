import express from "express";
import userController from "../controllers/user";
import auth from "../middleware/auth";

const userRouter = express.Router();

userRouter.get("/", auth, userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/create", userController.createUser);
userRouter.post("/login", userController.login);
userRouter.patch("/update/:id", userController.updateUser);
userRouter.delete("/delete/:id", userController.deleteUser);

export default userRouter;
