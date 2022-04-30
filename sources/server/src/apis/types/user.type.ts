import mongoose, { Model, Document } from 'mongoose';
import { IPost } from './post.type';

export type Role = 'ADMINISTRATOR' | 'STANDARD';

export interface IUser extends Document {
    username: string;
    password: string;
    name: string;
    dob: Role;
    posts: Array<string> | Array<IPost>;

    checkPasswordMatch(password: string): boolean;
}

export interface UserModel extends Model<IUser> {
    isUsernameTaken(email: string): boolean;
}
