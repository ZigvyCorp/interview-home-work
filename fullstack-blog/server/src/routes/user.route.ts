import express from "express";
import {
	getAllUsersWithAuthor,
	getUserById,
	getUserFromJsonPlaceholderAndSaveToDb,
} from "../controllers/user.controller";

const Router = express.Router();

Router.route("/insert-data-user").post(getUserFromJsonPlaceholderAndSaveToDb);
Router.route("/get-all-user").get(getAllUsersWithAuthor);
Router.route("/:id").get(getUserById);

export default Router;
