import mongoose from 'mongoose';
import { IComment } from '../types/comment.type';

const { Schema } = mongoose;

const CommentSchema = new Schema<IComment>(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts',
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

const Comment = mongoose.model<IComment>('comments', CommentSchema);

export { CommentSchema, Comment };
