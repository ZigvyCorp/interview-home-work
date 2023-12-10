import { Model, Schema, model } from "mongoose";
import { IUser } from "../user-module/user.model";
import { IBlog } from "../blog-module/blog.model";

export interface IBlogCommentCreate {
    userComment: IUser;
    comment: string;
    blog: IBlog;
}

export interface IBlogComment extends IBlogCommentCreate {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

const CommentSchema = new Schema<IBlogComment, Model<IBlogComment>>({
    userComment: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comment: { type: "string", required: true },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
    }
}, {
    timestamps: true,
})

const BlogCommentModel = model<IBlogComment>('BlogComment', CommentSchema);

export { BlogCommentModel }