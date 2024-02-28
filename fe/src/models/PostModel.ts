import { User } from "./UserModel";

export interface Post {
    id?: number;
    owner?: number;
    title?:string;
    content?: string;
    createdAt?: string;
    ownerDetail?: User;
    tags?: string[];
}

export interface PostParams {
    offset?: number;
	limit?: number;
}

export interface Pagination {
	total?: number;
	offset?: number;
	limit?: number;
}