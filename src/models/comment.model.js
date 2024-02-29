import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
	id: {
		type: Number,
		unique: true,
	},
	content: {
		type: String,
	},
	owner: {
		type: Number,
		ref: "User",
	},
	post: {
		type: Number,
		ref: "Post",
	},
});

export default mongoose.model("Comment", CommentSchema);
