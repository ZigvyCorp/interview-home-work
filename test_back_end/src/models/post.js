const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: { type: Schema.ObjectId },
    userId: { type: Schema.Types.ObjectId, ref: 'user'},
    title: { type: String },
    body: { type: String }
});

module.exports = mongoose.model('post', postSchema);