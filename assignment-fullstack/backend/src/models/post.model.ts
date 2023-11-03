import mongoose, { Schema, Types } from "mongoose";

const postSchema = new Schema({
    owner: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    created_at: {
        type: Number,
    },
    tags: {
        type: [String]
    }
})

const postModel = mongoose.model('Post', postSchema);
export default postModel;