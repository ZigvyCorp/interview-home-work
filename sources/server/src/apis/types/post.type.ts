import { Document, Schema } from 'mongoose';
import { IComment } from './comment.type';

export interface IPost extends Document {
    owner: string;
    title: string;
    content: string;
    tags: string[];
    comments: string[] | IComment[];
}
