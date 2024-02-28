import { IComment } from "./comment.interface";


export interface IPost {
    title: string;
    author: {
        name: string;
        username: string
    };
    created_at: string;
    body: string;
    comments: IComment[];

}