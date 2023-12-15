export interface CommentType {
    _id: string,
    user: {
        _id: string,
        name: string
    };
    body: string;
} 