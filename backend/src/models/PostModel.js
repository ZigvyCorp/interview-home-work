const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        postId: {type: Number,autoIncrement: true, unique: true, primaryKey: true},
        Title: {type: String, required: true},
        Description: {type: String, required: true},
        userId: {
            type: mongoose.Schema.Types.Number,
            ref:"User",
            required: true,
        },
        commentId:[{
            type: mongoose.Schema.Types.Number,
            ref:"Comment",
        }]
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;