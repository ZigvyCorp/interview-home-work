import { Router } from "express";
import { isValidObjectId } from "../utils/request.js";
import { 
  createUser, 
  getUsers, 
  getUserById, 
  deleteUser, 
  updateUser 
} from "../controllers/userController.js";
import { createUserValidator, updateUserValidator } from '../validators/user.validator.js';

const router = Router();

router.post("/", createUserValidator, createUser);
router.get("/", getUsers);
router.get("/:id", isValidObjectId, getUserById);
router.patch("/:id", isValidObjectId, updateUserValidator, updateUser);
router.delete("/:id", isValidObjectId, deleteUser);

export default router;
