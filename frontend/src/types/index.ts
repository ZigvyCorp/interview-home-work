export interface IPost {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    tags: string[];

    owner: number | IUser;
    comments: number | IComment[];
};

export interface IComment {
    id: number;
    post: number;
    content: string;
    created_at: number;
    owner?: number | IUser | any;
    [key: string]: string | number | unknown;
};

export interface IUser {
    id: number;
    name: number;
    username: number;
    [key: string]: string | number;
};

export interface IPagination {
    limit: number;
    page: number;
    keyword?: string
}

export interface IPaginationResponse<K> {
    items: K[];
    meta: {
        currentPage: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
        totalPages: number;
    }
}
export interface IGetListPost extends IPagination { }
export interface IGetListPostResponse extends IPaginationResponse<IPost> { }