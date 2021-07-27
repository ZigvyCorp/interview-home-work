import jwt from 'jsonwebtoken';

export const generateJWT = (user) => {
	return jwt.sign(
		{
			id: user.id,
			username: user.username,
			name: user.name,
			dob: user.dob,
		},
		process.env.JWT_KEY || 'asd'
	);
}