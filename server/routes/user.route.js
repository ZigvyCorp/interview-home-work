import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  createUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
