import express from "express";
const router = express.Router();

import CommentController from "../controllers/comment.controller.js";

router.route("/").get(CommentController.getComments);

export default router;
