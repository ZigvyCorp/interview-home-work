import { Schema, model } from 'mongoose';

export interface Post {
    owner: Schema.Types.ObjectId;
    title: string;
    content: string;
    createdAt?: Date;
    comments: Schema.Types.ObjectId[];
    tags: string[];
}

const schema = new Schema<Post>({
    owner: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    title: { type: String, require: true },
    content: { type: String, require: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', require: true }],
    createdAt: { type: Date, default: new Date(+new Date() + 7*24*60*60*1000) },
    tags: [{ type: String }]
});

export const Model = model('Post', schema);