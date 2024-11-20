export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface IUser {
    id: number;
    name: string;
}

export interface IComment {
    id: number;
    postId: number;
    body: string;
}
