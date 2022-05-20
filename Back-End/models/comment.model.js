var mongoose = require('mongoose')

// create schema
var commentSchema = new mongoose.Schema({
	postId: Number,
	id: Number,
	name: String,
	email: String,
	body: String
});

var Comment = mongoose.model('Comment', commentSchema, 'comments')


module.exports = Comment; 