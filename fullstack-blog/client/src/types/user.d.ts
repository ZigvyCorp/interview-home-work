interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

declare interface IUser {
	_id: string;
	jsonId: number;
	name: string;
	username: string;
	email: string;
	phone: number;
	website: string;
	image: string;
	company: ICompany;
	createdAt: string;
}

declare interface ISignIn {
	email: string;
	password: string;
}

declare interface ISignUp extends ISignIn {
	username: string;
	name: string;
}
