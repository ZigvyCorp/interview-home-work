import express from "express";

import { createUsers } from "../controllers/users.controllers";

const router = express.Router();

router.post("/", createUsers);

export default router;
