import { Schema, model } from 'mongoose';

export interface Comment {
    owner: Schema.Types.ObjectId;
    post: Schema.Types.ObjectId;
    content: string;
    createdAt?: Date;
}

const schema = new Schema<Comment>({
    owner: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', require: true },
    content: { type: String, require: true },
    createdAt: { type: Date, default: new Date(+new Date() + 7*24*60*60*1000) },
});

export const Model = model('Comment', schema);