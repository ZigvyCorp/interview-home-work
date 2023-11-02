import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    owner: { type: Number },
    title: { type: String },
    content: { type: String },
    tags: { type: Array },
}, { timestamps: true })

export const PostsModel = mongoose.model('posts', PostsSchema, 'posts', { autoCreate: false });
