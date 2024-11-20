import { IUser } from "./user.type";

export const GET_COMMENT = "GET_COMMENT";

export interface IComment {
	_id?: string;
	username?: IUser;
	postId?: string;
	postUserId?: string;
	content: string;
}
// export interface ICommentsAll {
// 	_id: string;
// 	// name: string;
// 	// count: number;
// 	posts: IComment[];
// }

export interface IGetComment {
	type: typeof GET_COMMENT;
	payload: IComment[];
}
export type ICommentsTypes = IGetComment;
