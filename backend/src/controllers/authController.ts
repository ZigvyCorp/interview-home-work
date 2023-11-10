import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Users from "../models/usersModels";
import { IUser } from "../types/user/user.type";
import { generateAccessToken } from "../configs/generateToken";
export const register = async (req: Request, res: Response) => {
	try {
		const { username, name, dob, password, avatar } = req.body;
		const salt = await bcrypt.genSaltSync(10);
		const hasPassword = await bcrypt.hashSync(password, salt);
		const user = await Users.findOne({ username });

		if (user) {
			return res.status(400).json({
				msg: "Tên đăng nhập tồn tại!",
			});
		}

		const newUser = {
			username,
			password: hasPassword,
			name,
			dob,
			avatar,
		};

		const createUser = new Users(newUser);
		await createUser.save();
		return res.status(200).json({ msg: "Tạo tài khoản thành công!" });
	} catch (error) {
		return res.status(500).json(error);
	}
};
export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const user = await Users.findOne({ username });
	if (!user)
		return res.status(400).json({ msg: "Tên đăng nhập không tồn tại!" });

	loginUser(user, password, res);
};

export const loginUser = async (
	user: IUser,
	password: string,
	res: Response
) => {
	try {
		const isMathPass = await bcrypt.compare(password, user.password);
		if (!isMathPass)
			return res.status(400).json({
				msg: "Mật khẩu của bạn không đúng",
			});
		const accessToken = generateAccessToken({ id: user._id });

		return res.status(200).json({
			msg: "Đăng nhập thành công!",
			accessToken,
			user: { ...user._doc, password: "" },
		});
	} catch (error) {
		return res.status(500).json(error);
	}
};
