const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema(
    {
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
        post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', require: true},
        content: { type: String, require: true},
        created_at: { type: String, require: true},
    },
    {
        timestamps: true
    }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;