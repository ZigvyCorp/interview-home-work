export interface INewUser {
	username: string;
	password: string;
}

export interface ITokenDecoded {
	id?: string;
	newUser?: INewUser;
	iat: number;
	exp: number;
}
