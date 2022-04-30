import mongoose from 'mongoose';
import { IPost } from '../types';
import { User } from './user.model';

const { Schema } = mongoose;

const PostSchema = new Schema<IPost>(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        tags: {
            type: [String],
            required: false,
        },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }],
    },
    {
        timestamps: true,
    },
);

const Post = mongoose.model<IPost>('posts', PostSchema);

export { PostSchema, Post };
