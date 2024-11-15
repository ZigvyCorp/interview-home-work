import { Schema, model, Document, Types } from "mongoose";
import { TimeStamps } from "@/types";

export interface IUser extends Document, TimeStamps {
    _id: Types.ObjectId;
    username: string;
    passwordHash: string;
}

const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
}, {timestamps: true});
const User = model<IUser>("User", userSchema);
export default User;