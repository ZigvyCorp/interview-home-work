import express from "express";
const router = express.Router();

import UserController from "../controllers/user.controller.js";

router.route("/").get(UserController.getUsers);
router.route("/:id").get(UserController.getUser).patch(UserController.updateUser).delete(UserController.deleteUser);

export default router;
