import mongoose, { Schema, Document } from 'mongoose';
import logger from '@shared/Logger';
export interface IUser extends Document {
    id: number;
    username: string;
    password: string;
    pwdHash: string;
    name: string;
    dob: string;
    created_at: Date;
}

const UserSchema: Schema = new Schema({
    id: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pwdHash: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    created_at: { type: Date, required: true },
}, { collection: 'users' });
export default mongoose.model<IUser>('User', UserSchema);
