import {
  createUser,
  getAllUsers,
  getUserById,
  signin,
} from "../controllers/user.controller";
import { Router } from "express";

export default (router: Router) => {
  router.get("/users", getAllUsers);
  router.get("/users/:id", getUserById);
  router.post("/users", createUser);
  router.post("/login", signin);
};
