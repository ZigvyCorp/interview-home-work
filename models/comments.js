const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
}, { timestamps: true })
const comment = mongoose.model("comment", commentSchema, "comment")

module.exports = comment
