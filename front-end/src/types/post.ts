import { Comment } from './comment';

export type Post = {
    id: number;
    ownerId: number;
    title: string;
    content: string;
    comments: Comment[];
    owner: {
        email: string;
        name: string;
    };
    createdAt: string;
};
