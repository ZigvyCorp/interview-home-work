import { NextFunction, Request, Response } from "express";
import { verifyJWT } from "../utils";

export interface RequestWithUser extends Request {
	user: {
		_id: string;
		name: string;
		email: string;
		iat: number;
		exp: number;
	};
}

export const currentUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
	try {
		if (!req.headers.authorization) {
			throw new Error();
		}
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			throw new Error();
		}
		const decoded = (await verifyJWT(token)) as {
			_id: string;
			name: string;
			email: string;
			iat: number;
			exp: number;
		};
		if (!decoded) {
			throw new Error();
		}
		(req as RequestWithUser).user = decoded;
		next();
	} catch (error) {
		res.status(401).json({
			message: "Invalid token",
		});
	}
};
