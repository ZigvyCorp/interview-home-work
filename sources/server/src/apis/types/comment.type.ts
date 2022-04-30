import { Document } from 'mongoose';

export interface IComment extends Document {
    owner: string;
    post: string;
    content: string;
}
