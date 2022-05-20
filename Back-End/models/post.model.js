var mongoose = require('mongoose')

// create schema
var postSchema = new mongoose.Schema({
	userId: Number,
	id: Number,
	title: String,
	body: String
});

var Post = mongoose.model('Post', postSchema, 'posts')


module.exports = Post; 