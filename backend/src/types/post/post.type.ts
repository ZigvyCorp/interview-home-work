import { IUser } from "../user/user.type";

export interface IPosts {
	_id?: string;
	username: IUser;
	title: string;
	content: string;
	createdAt: string;
	tags: string[];
}
