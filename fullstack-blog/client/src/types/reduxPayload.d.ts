declare interface IPostActionPayload {
    title?: string;
    page: number;
}

declare interface IPostDetailPayload {
	id: number;
}

declare interface PayloadAction<T> {
    type: string;
    payload: T;
    error?: any;
}