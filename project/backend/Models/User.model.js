const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    id:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default:null
    },
    dob:{
        type: Date ,
        default:null
    },
    created_at: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('User',UserSchema);