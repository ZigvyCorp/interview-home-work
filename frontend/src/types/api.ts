export interface TApiResponse<T = unknown> {
    data: T | null;
    total?: number;
    message?: string;
    statusCode?: number
}

export type TGetPostsRequest = {
    start: number,
    limit: number
}

export type TGetCommentsRequest = {
    postId: number
}