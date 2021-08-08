const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
    id: {type : Number, unique: true},
    owner: {type : Number},
    title: {type : String},
    content: {type: String},
    created_at: {type: Number},
    tag: {type : Array}
});


module.exports = mongoose.model('Post', Post);