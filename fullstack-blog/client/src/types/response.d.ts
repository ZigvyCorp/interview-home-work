declare interface IResponse<T>{
    status: string;
    message: string;
    data: T;
}

declare interface IResPost{
    posts: IPost[];
    totalPosts: number;
    totalPages: number;
    currentPage: number;
}