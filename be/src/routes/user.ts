import { UserService } from "../services/user.service";
import express from "express";
import { asyncHandler } from "../helpers/asyncHandle";
import { UserController } from "../controllers/user.controller";
import validationService from "../helpers/validation";

const router = express.Router();

const userService = new UserService();
const userController = new UserController(userService, validationService);

router.get("/", asyncHandler(userController.getAllUser()));
router.get("/:id", asyncHandler(userController.getUser()));
router.put("/", asyncHandler(userController.updateUser()));
router.post("/", asyncHandler(userController.createUser()));
router.delete("/:id", asyncHandler(userController.deleteUser()));

export default router;
