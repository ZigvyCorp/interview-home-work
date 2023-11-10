export interface IError extends ErrorConstructor {
	message: string;
	status: number;
}

export interface IResponse {
	message: string;
	data: any;
	statusCode: number;
}
