export type PostFromMockApi = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

export type updatePostRequest = {
    title: string;
    content: string;
};

export type createPostRequest = {
    id: number;
    ownerId: number;
    title: string;
    content: string;
};
