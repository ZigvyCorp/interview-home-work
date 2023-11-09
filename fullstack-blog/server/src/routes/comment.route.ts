import express from "express";
import {
	createComment,
	getAllCommentsWithPostId,
	getCommentById,
	getCommentFromJPAndSaveToDb,
} from "../controllers/comment.controller";
import { currentUser } from "../middlewares/auth";

const Router = express.Router();
Router.route("/insert-data-comment").post(getCommentFromJPAndSaveToDb);
Router.route("/post/:postId").get(getAllCommentsWithPostId);
Router.route("/:id").get(getCommentById);
Router.route("/create-comment").post(currentUser, createComment);

export default Router;
