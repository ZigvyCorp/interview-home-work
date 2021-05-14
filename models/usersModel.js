const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        unique:true,
    },
},{
    timestamps:true,
});

module.exports = mongoose.model('Users',Schema)