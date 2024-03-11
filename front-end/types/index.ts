export type PostData = {
	_id: string;
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type BlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

export type PostComment = {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
} | null;
