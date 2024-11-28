import { Router } from "express";
import { getUserData } from "../controllers/user.controller.js";

const router = Router()

router.get('/get-users-data' , getUserData)

export default router