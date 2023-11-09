import axios from "axios";
import bcryptjs from "bcryptjs";
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
			newUser.password = await bcryptjs.hash(user.username, +process.env.SALT_OR_ROUNDS || 10);
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

// create user
export async function createUser(req: Request, res: Response, next: NextFunction) {
	const { name, username, password, email } = req.body;

	try {
		const isExist = User.findOne({
			$or: [{ email }, { name }, { username }],
		});
		if (isExist) {
			throw new Error("User already exist");
		}

		const newUser = new User({
			jsonId: +User.countDocuments() + 1,
			name,
			username,
			email,
			password: await bcryptjs.hash(password, +process.env.SALT_OR_ROUNDS || 10),
		});

		await newUser.save();
		res.status(201).json(handleResponse(newUser, 201, "User created successfully"));
	} catch (error) {
		next(error);
	}
}

// update user
export async function updateUser(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;
	const { name, username, password, email } = req.body;

	try {
		const user = await User.findById(id);
		if (!user) {
			throw new Error("User not found");
		}

		Object.assign(user, { name, username, email, password });

		await user.save();
		res.status(200).json(handleResponse(user, 200, "User updated successfully"));
	} catch (error) {
		next(error);
	}
}

// delete user
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
	const { id } = req.params;

	try {
		const user = await User.findById(id);
		if (!user) {
			throw new Error("User not found");
		}

		await user.remove();
		res.status(200).json(handleResponse(user, 200, "User deleted successfully"));
	} catch (error) {
		next(error);
	}
}
