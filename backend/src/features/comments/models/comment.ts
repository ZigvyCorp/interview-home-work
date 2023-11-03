import { Post } from '~/features/posts/models/post';
import { User } from '~/features/users/models/user';

export type Comment = {
    id: number;
    body: string;
    postID: number;
    userID: number;
    createdDate: Date;
    deleted: boolean;
    postDetail?: Post;
    userDetail?: User;
};

export type CommentResponse = {
    id: number;
    body: string;
    postID: number;
    userID: number;
    createdDate: string;
    userDetail: {
        name: string;
    };
};
