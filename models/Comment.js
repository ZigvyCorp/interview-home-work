const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comment = new Schema({
    id: {type : Number , unique: true},
    owner: {type : Number},
    post: {type : Number},
    content: {type: String},
    created_at: {type: Number}
});


module.exports = mongoose.model('Comment', Comment);