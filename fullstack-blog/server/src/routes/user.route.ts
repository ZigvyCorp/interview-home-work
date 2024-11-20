import express from "express";
import {
	createUser,
	getAllUsersWithAuthor,
	getProfile,
	getUserById,
	getUserFromJsonPlaceholderAndSaveToDb,
	signIn,
} from "../controllers/user.controller";
import { currentUser } from "../middlewares/auth";

const Router = express.Router();

Router.route("/insert-data-user").post(getUserFromJsonPlaceholderAndSaveToDb);
Router.route("/get-all-user").get(getAllUsersWithAuthor);
Router.route("/sign-up").post(createUser);
Router.route("/sign-in").post(signIn);
Router.route("/me").get(currentUser, getProfile);
Router.route("/:id").get(getUserById);

export default Router;
