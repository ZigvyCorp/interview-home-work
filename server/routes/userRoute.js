import express from "express";
import { signup, signin, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
