import { model, models, Schema } from "mongoose";
const postSchema = new Schema({
	authorId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	jsonId: {
		type: Number,
	},
	title: {
		type: String,
	},
	body: {
		type: String,
	},
	tags: {
		type: [String],
	},
});

const Post = models.Post || model("Post", postSchema);
export default Post;
