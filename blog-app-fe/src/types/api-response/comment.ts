export interface IComment {
	id: string;
	content: string;
	owner: {
		id: string;
		name: string;
	};
	createdAt: string;
}
