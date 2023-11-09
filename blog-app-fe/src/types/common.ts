export interface IResposeSuccess<T> {
	message: string;
	data: T;
}

export interface IPagination<T> {
	total: number;
	previous?: {
		page: number;
		limit: number;
	};
	data: T[];
	next?: {
		page: number;
		limit: number;
	};
	rowPerpage: number;
}
