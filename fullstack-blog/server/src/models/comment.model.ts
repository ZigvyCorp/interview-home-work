import { model, models, Schema } from "mongoose";

const commentSchema = new Schema(
	{
		postId: {
			type: Schema.Types.ObjectId,
			ref: "Post",
			required: true,
		},
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		body: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Comment = models.Comment || model("Comment", commentSchema);
export default Comment;
