import { Model, Schema, model } from "mongoose";
import { IUser } from "../user-module/user.model";
import { IBlogComment } from "../comment-model/comment.model";

export interface ICreateBlog {
    author: IUser;
    content: string;
    title: string;
}

export interface IBlog extends ICreateBlog {
    id: string;
    comment: IBlogComment[];
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema = new Schema<IBlog, Model<IBlog>>({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { type: "string", required: true },
    title: { type: "string", required: true },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: []
    }]
}, {
    timestamps: true,
})

const BlogModel = model<IBlog>('Blog', BlogSchema);

export { BlogModel }

