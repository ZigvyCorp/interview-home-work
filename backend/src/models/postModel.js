import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		title: {
			type: String,
			require: true,
		},
		content: {
			type: String,
			require: true,
		},
		tags: [{
			type: String,
		}]
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

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;