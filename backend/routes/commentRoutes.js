import express from "express";
import { findAllCommentByPostId } from "../controller/commentController.js";


const router = express.Router();

router.get("/", findAllCommentByPostId);


export default router;
