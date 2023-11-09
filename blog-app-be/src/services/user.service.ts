import { Request, Response } from "express";
import { CreateUserDTO } from "../dto/user.dto";
import User from "../models/user";

class UserService {
	public static async create(data: CreateUserDTO) {
		data.dob = new Date().toDateString();

		const user = new User(data);

		await user.save();

		return user;
	}
}

export default UserService;
