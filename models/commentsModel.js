const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    postId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
});

module.exports = mongoose.model('Comments',Schema)