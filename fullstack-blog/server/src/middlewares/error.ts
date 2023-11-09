import { NextFunction, Request, Response } from "express";

async function catchAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(next);
	};
}

function errorMiddleware(error: any, _req: Request, res: Response, next: NextFunction) {
	const status = error.status || 500;
	const message = error.message || "Something went wrong";
	res.status(status).send({
		message,
		status,
	});
}

export { catchAsync, errorMiddleware };
