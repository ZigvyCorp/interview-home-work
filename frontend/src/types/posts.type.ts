import { IUser } from "./user.type";

export const CREATE_POST = "CREATE_POST";
export const GET_POST = "GET_POST";

export interface IPosts {
	_id: string;
	username: IUser;
	title: string;
	content: string;
	createdAt: string;
	tags: string[];
}

export interface IGetPost {
	type: typeof GET_POST;
	payload: IPosts[];
}
export type IPostTypes = IGetPost;
