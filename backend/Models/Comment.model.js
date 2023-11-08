const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    owner:{
        type:Number,
        required:true
    },
    post:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    created_at:{
        type: Date,
		default: Date.now,
    }
}, )

module.exports = mongoose.model('Comment',CommentSchema);