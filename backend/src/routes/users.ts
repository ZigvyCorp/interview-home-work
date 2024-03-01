import { Router } from "express";
import usersController from "../controllers/users";

const router = Router()

router.get('/users/:id', usersController.getUser)

export default router