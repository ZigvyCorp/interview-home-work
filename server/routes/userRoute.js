import express from 'express';
import {
    deleteUser,
    getListUser,
    getUserDetail,
    loginUser,
    registerUser,
    updateUser
} from '../controllers/userController.js';

const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/", getListUser)

router.get("/:id", getUserDetail)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router;
