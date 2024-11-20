import { sign, verify } from "jsonwebtoken";

export const createJWT = (_id: string, email: string, name: string) => {
	return sign({ _id, email, name }, process.env.JWT_SECRET as string, { expiresIn: "365d" });
};

export const verifyJWT = (token: string) => {
	return new Promise((resolve, reject) => {
		try {
			const decoded = verify(token, process.env.JWT_SECRET as string);
			resolve(decoded);
		} catch (error) {
			reject(error);
		}
	});
};
