export type Post = {
    id: number;
    title: string;
    body: string;
    totalComments: number;
    createdDate: string;
    userDetail: {
        name: string;
    };
};
