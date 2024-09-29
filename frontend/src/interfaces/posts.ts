export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    user?: {
        name: string;
    };
    comments: any[];
}