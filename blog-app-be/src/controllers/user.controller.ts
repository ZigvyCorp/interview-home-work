import { Request, Response } from "express";
import UserService from "../services/user.service";
import { cresteUserSchema } from "../dto/user.dto";
import { ValidationError } from "yup";

class UserController {
	public static async create(req: Request, res: Response) {
		const { body } = req;

		try {
			const data = cresteUserSchema.validateSync(body, { abortEarly: false, stripUnknown: true });

			const user = await UserService.create(data);
			return res.json({
				message: "Success",
				data: {
					user,
				},
			});
		} catch (e) {
			const error = e as ValidationError;

			return res.status(422).json({ errors: error.errors });
		}
	}
}

export default UserController;
