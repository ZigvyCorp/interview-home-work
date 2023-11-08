export interface IPost {
    id: string;
    owner: string;
    title: string;
    content: string;
    created_at: number;
    tags: string[];
};

export interface IComment {
    id: number;
    owner: number;
    post: number;
    content: string;
    created_at: number;
    [key: string]: string | number;
};