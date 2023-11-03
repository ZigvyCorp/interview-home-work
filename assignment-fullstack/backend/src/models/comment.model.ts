import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    owner: {
        type: String,
    },
    post: {
        type: String,
    },
    content: {
        type: String,
    },
    created_at: {
        type: Number,
    }
})

const commentModel = mongoose.model('Comment', commentSchema);
export default commentModel;