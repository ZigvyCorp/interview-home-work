export type CommentFromMockApi = {
    id: number;
    postId: number;
    email: string;
    body: string;
};

export type CreateCommentRequest = {
    id: number;
    postId: number;
    email: string;
    content: string;
};

export type UpdateCommentRequest = {
    content: string;
};
