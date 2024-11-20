const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		id: Number,
		owner: Number,
		title: String,
		content: String,
		created_at: Number,
		tags: Array
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('post', postSchema);
