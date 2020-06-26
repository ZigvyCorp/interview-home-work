const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name:{type:String,require:true},
	username:{type:String,require:true},
	password:{type:String,require:true},
	dob:{type:Date,require:true},
	create_At:{type:Date,require:true}
},{
	timestamps:true
});

module.exports = mongoose.model('User',userSchema);