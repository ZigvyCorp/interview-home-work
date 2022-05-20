var mongoose = require('mongoose')

// create schema
var userSchema = new mongoose.Schema({
	id: Number,
	name: Number,
	username: String,
	email: String,
	address: Object,
	phone: String,
	website: String,
	company: Object
});

var User = mongoose.model('User', userSchema, 'users')


module.exports = User; 