const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    _id: Schema.ObjectId,
    postId: {type: Schema.Types.ObjectId},
    name: {type: String},
    email: {type:String},
    body: {type:String}
});

module.exports = mongoose.model('comment', CommentSchema);
