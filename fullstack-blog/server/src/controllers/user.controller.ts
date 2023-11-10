import axios from "axios";
import bcryptjs from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { RequestWithUser } from "../middlewares/auth";
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
		const isExist = await User.findOne({
			$or: [{ email }, { name }, { username }],
		});

		if (isExist) {
			throw new Error("User already exist");
		}

		const newUser = new User({
			jsonId: (await User.countDocuments()) + 1,
			name,
			username,
			email,
			password: await bcryptjs.hash(password, +process.env.SALT_OR_ROUNDS || 10),
		});

		const response = {
			newUser,
			token: newUser.signToken(),
		};

		await newUser.save();
		res.status(201).json(handleResponse(response, 201, "User created successfully"));
	} catch (error) {
		next(error);
	}
}

// sign in
export async function signIn(req: Request, res: Response, next: NextFunction) {
	const { password, email } = req.body;

	try {
		const user = await User.findOne({
			email,
		});

		if (!user) {
			throw new Error("User not found");
		}

		if (user && bcryptjs.compareSync(password, user.password)) {
			res.status(200).json({
				message: "User created successfully",
				data: {
					user,
					token: user.signToken(),
				},
			});
		}

		throw new Error("Wrong password");
	} catch (error) {
		next(error);
	}
}

// get profile
export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { user } = req as RequestWithUser;
		const userData = await User.findById(user._id);
		if (!userData) throw handleError(new Error("User not found"), 404);
		res.status(200).json(handleResponse(userData, 200, "User profile fetched successfully"));
	} catch (error) {
		next(error);
	}
};

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
