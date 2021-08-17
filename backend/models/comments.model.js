const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
	{
		id: Number,
		owner: Number,
		post: Number,
		content: String,
		created_at: Number
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('comment', commentSchema);
