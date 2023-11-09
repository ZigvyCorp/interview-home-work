import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { User } from "../models";
import { IUser } from "../types";
import { handleError, handleResponse } from "../utils";

// get users from jsonplaceholder and save to db
export async function getUserFromJsonPlaceholderAndSaveToDb(req: Request, res: Response, next: NextFunction) {
	try {
		const { data } = await axios.get(`${process.env.MOCK_API_URL}/users`);
		const users: IUser[] = data;
		users.forEach(async (user) => {
			const newUser = new User(user);
			newUser.jsonId = user.id;
			await newUser.save();
		});
		res.status(200).json(handleResponse(users, 200, "Users fetched successfully"));
	} catch (error) {
		handleError(error, 500);
	}
}

// get all users
export async function getAllUsersWithAuthor(req: Request, res: Response, next: NextFunction) {
	try {
		const users = await User.find();
		res.status(200).json(handleResponse(users, 200, "Users fetched successfully"));
	} catch (err) {
		next(err);
	}
}

// get user by id
export async function getUserById(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;

	try {
		const user = await User.findById(id);
		if (!user) throw new Error("User not found");

		res.status(200).json(handleResponse(user, 200, `User -${id} fetched successfully`));
	} catch (error) {
		next(error);
	}
}
