import express from "express";
import {
	createPost,
	getAllPostsWithAuthorIdAndTitle,
	getPostById,
	getPostFromJsonPlaceholderAndSaveToDb,
} from "../controllers/post.controller";
import { currentUser } from "../middlewares/auth";

const Router = express.Router();
Router.route("/insert-data-post").post(getPostFromJsonPlaceholderAndSaveToDb);
Router.route("/get-all-post").get(getAllPostsWithAuthorIdAndTitle);
Router.route("/:id").get(getPostById);
Router.route("/create-post").post(currentUser, createPost);

export default Router;
