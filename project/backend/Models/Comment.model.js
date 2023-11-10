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
}, {toJSON: {virtuals:true} })
CommentSchema.virtual('owners', {
    ref: 'User', 
    localField: 'owner', 
    foreignField: 'id', 
    justOne: true
  });
  CommentSchema.virtual('posts', {
    ref: 'Post', 
    localField: 'post', 
    foreignField: 'id', 
    justOne: true
  });
module.exports = mongoose.model('Comment',CommentSchema);