import express from "express";
import {
	getAllCommentsWithPostId,
	getCommentById,
	getCommentFromJPAndSaveToDb,
} from "../controllers/comment.controller";

const Router = express.Router();
Router.route("/insert-data-comment").post(getCommentFromJPAndSaveToDb);
Router.route("/post/:postId").get(getAllCommentsWithPostId);
Router.route("/:id").get(getCommentById);
export default Router;
