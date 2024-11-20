const mongoose = require('mongoose');
const User = require('./User.model')
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    owner:{
        type:Number,
        required:true,
        
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    tags:{
        type: [String] ,
       
    },
    created_at:{
        type: Date,
		default: Date.now,
    }
},{toJSON: {virtuals:true} } )
PostSchema.virtual('owners', {
    ref: 'User', 
    localField: 'owner', 
    foreignField: 'id', 
    justOne: true
  });
module.exports = mongoose.model('Post',PostSchema);