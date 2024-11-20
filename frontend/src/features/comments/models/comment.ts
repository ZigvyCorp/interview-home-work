export type Comment = {
    id: number;
    body: string;
    postID: number;
    userID: number;
    createdDate: string;
    userDetail: {
        name: string;
    };
};
