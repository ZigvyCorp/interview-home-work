const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
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

module.exports = mongoose.model('Posts',Schema)