export interface Post {
    _id: string;
    owner: string;
    title: string;
    content: string;
    created_at: number;
    tags: string[];
}


export interface PostState {
    posts: Post[];
    totalPosts: number; 
}


export interface FilterPost {
    limit: number; 
    skip: number;
    query: string;
}