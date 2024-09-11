import express from "express";

import { createComments } from "../controllers/comments.controller";

const router = express.Router();

router.post("/", createComments);

export default router;
