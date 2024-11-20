export interface IPost {
	id: string;
	authorId: string;
	jsonId: number;
	title: string;
	content: string;
	tags: string[];
}

export interface IPostJS {
	id: number;
	userId: number;
	title: string;
	body: string;
}
