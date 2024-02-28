import express from "express";
import {
    createUser,
    getUser,
    getUserByPostId,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/post/:postId", getUserByPostId);
router.post("/signup", createUser);

export default router;
