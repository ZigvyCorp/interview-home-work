export interface IUser {
	id: string;
	jsonId: number;
	name: string;
	username: string;
	password: string;
	email: string;
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
	image: string;
}
