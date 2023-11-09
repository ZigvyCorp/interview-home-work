declare interface IComment {
	_id: string;
	email: string;
	name: string;
	body: string;
}

declare interface ICommentCreate {
	postId: string;
	body: string;
}
