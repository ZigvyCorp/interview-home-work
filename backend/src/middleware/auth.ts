import { NextFunction, Response } from "express";
import { IReqAuth } from "../types/user/user.req";
import { ITokenDecoded } from "../types/token/token.type";
import Users from "../models/usersModels";
import jwt from "jsonwebtoken";

export const auth = async (
	req: IReqAuth,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.header("Authorization");
		if (!token)
			return res.status(400).json({ msg: "Bị lỗi, không hợp lệ!" });

		const decode = <ITokenDecoded>(
			jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`)
		);

		if (!decode)
			return res.status(400).json({ msg: "Bị lỗi, không hợp lệ!" });

		const user = await Users.findOne({ _id: decode.id });
		if (!user)
			return res.status(400).json({ msg: "Bị lỗi, không hợp lệ!" });

		req.username = user;
		next();
	} catch (error: any) {
		return res.status(500).json({ msg: error.message });
	}
};
