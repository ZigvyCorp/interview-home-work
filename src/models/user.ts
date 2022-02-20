import { Schema, model } from 'mongoose';

export interface User {
    username: string;
    hash: string;
    salt: string;
    dob?: Date;
    createdAt?: Date;
}

const schema = new Schema<User>({
    username: { type: String, required: true, unique: true, lowercase: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true },
    dob: { type: Date, default: new Date(+new Date() + 7*24*60*60*1000) },
    createdAt: { type: Date, default: new Date(+new Date() + 7*24*60*60*1000) }
});

export const Model = model('User', schema);