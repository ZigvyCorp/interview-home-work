//alt shift f de format lai code
import { Router } from "express";
import { userController } from "../controllers/UserController.js";
export const userRouter = Router();

//Get a user
//[GET]
//Params:@user._id
userRouter.get("/:id", userController.display);

//Create a user
//[POST]
userRouter.post("", userController.create);

//Update
//[PUT]
//Params:@user._id
userRouter.put("/:id", userController.update);

//Delete user
//[DELETE]
//Params:@user._id
userRouter.delete("/:id", userController.delete);
