import { User } from '~/features/users/models/user';

export type PostResponse = {
    id: number;
    title: string;
    body: string;
    totalComments: number;
    createdDate: string;
    userDetail: {
        name: string;
    };
};

export type Post = {
    id: number;
    title: string;
    body: string;
    userID: number;
    totalComments: number;
    createdDate: Date;
    deleted: boolean;
    userDetail?: User;
};
