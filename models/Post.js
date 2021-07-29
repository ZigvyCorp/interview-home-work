const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: { type: Date, default: Date.now },
    tags: [{ type: String }]
});

module.exports = mongoose.model("Post", PostSchema);