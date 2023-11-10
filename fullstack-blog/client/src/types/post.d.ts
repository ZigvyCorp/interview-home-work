declare interface IPost {
	_id: string;
	jsonId: number;
	title: string;
	body: string;
	author: string;
	tags: string[];
	authorId: IUser;
	createdAt: string;
}

declare interface IPostCreate {
	title: string;
	body: string;
	tags: string[];
}
