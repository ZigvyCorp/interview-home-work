import jwt from 'jsonwebtoken';

export const getCurrentUser = (
	req,
	res,
	next,
) => {
	if (!req.session.jwt) {
		return next();
	}

	try {
		const payload = jwt.verify(
			req.session.jwt,
			process.env.JWT_KEY || 'asd'
		)
		req.currentUser = payload;

		next();
	} catch (error) {
		res.status(401);
		next(new Error('verify jsonwebtoken failed'))
	}
}