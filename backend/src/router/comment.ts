import express from "express";
import { auth } from "../middleware/auth";
import { getComments, postComments } from "../controllers/commentController";

const router = express.Router();

router.post("/", auth, postComments);
router.get("/", getComments);
export default router;
