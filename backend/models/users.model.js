const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		id: Number,
		username: String,
		password: String,
		name: String,
		dob: String,
		created_at: Number
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('user', userSchema);
