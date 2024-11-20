import { Model, Schema, model } from "mongoose";
import { IBlog } from "../blog-module/blog.model";

export interface ILoginUser{
    email: string;
    password: string;
}


export interface ICreateUser extends ILoginUser {
    name: string;
    phone: string;
    avatarUrl?: string;
}

export interface IUser extends ICreateUser {
    id: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    post: IBlog[]
}

const UserSchema = new Schema<IUser, Model<IUser>>({
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    phone: { type: "string", required: true },
    avatarUrl: { type: "string", nullable: true, default: null },
    active: { type: "boolean", default: false },
    post:[{
        type: Schema.Types.ObjectId,
        ref: 'Blog',
    }]
}, {
    timestamps: true,
})

const UserModel = model<IUser>('User', UserSchema);

export { UserModel }