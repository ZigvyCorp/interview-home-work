import express from "express";
import {
	getAllPostsWithAuthorIdAndTitle,
	getPostById,
	getPostFromJsonPlaceholderAndSaveToDb,
} from "../controllers/post.controller";

const Router = express.Router();
Router.route("/insert-data-post").post(getPostFromJsonPlaceholderAndSaveToDb);
Router.route("/get-all-post").get(getAllPostsWithAuthorIdAndTitle);
Router.route("/:id").get(getPostById);
export default Router;
