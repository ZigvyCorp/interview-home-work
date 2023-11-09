const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: { type: Schema.ObjectId },
    id: { type: Number },
    userId: { type: Number},
    title: { type: String },
    body: { type: String }
});

module.exports = mongoose.model('post', postSchema);