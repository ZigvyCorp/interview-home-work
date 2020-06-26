const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	owner:{type:String,require:true},
	name:{type:String,require:true},
	title:{type:String,require:true},
	subtitle:{type:String,require:true},
	content:{type:String,require:true},
	create_At:{type:Date},
	tags:[String]
},{
	timestamps:true 
});

module.exports = mongoose.model('Post',postSchema);