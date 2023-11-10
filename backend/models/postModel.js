import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    owner: {
        type: Number,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Number,
        required: true,
    },
    tags: {
        type: [String],
    },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
