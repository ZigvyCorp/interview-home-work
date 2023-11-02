import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    owner: { type: Number },
    post: { type: Number },
    content: { type: String },
}, { timestamps: true })

export const CommentsModel = mongoose.model('comments', CommentsSchema, 'comments', { autoCreate: false });
