import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
	id: {
		type: Number,
		unique: true,
	},
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	tags: {
		type: [String],
	},
	owner: {
		type: Number,
		ref: "User",
	},
	created_at: {
		type: Date,
	},
});

export default mongoose.model("Post", PostSchema);
