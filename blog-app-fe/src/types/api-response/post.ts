export interface IPost {
	id: string;
	title: string;
	content: string;
	owner: {
		id: string;
		name: string;
	};
	createdAt: string;
	tags: string[];
	numComments: number;
}
