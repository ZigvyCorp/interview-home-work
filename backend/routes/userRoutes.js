import express from "express";
import { findAllUser } from "../controller/userController.js";

const router = express.Router();

router.get("/",findAllUser )



export default router