import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post',
			require: true,
		},
		content: {
			type: String,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
			}
		}
	}
)

const CommentModel = mongoose.model('Comment', commentSchema);

export default CommentModel;