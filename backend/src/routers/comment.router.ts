import express, { Router } from "express";
import { add } from "src/controllers/comment.controller";

const router: Router = express.Router();

router.post("/comments", add);

export default router;
