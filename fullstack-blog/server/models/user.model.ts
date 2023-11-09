import { model, models, Schema } from "mongoose";
const userSchema = new Schema(
	{
		jsonId: {
			type: Number,
		},
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		phone: {
			type: String,
		},
		website: {
			type: String,
		},
		company: {
			name: String,
			catchPhrase: String,
			bs: String,
		},
		address: {
			street: String,
			suite: String,
			city: String,
			zipcode: String,
			geo: {
				lat: String,
				lng: String,
			},
		},
		image: {
			type: String,
			required: true,
			trim: true,
			default:
				"https://res.cloudinary.com/azurestore/image/upload/v1672136855/ShoeBeeDoo/bighead-5_bviccq.svg",
		},
	},
	{
		timestamps: true,
	}
);

const User = models.User || model("User", userSchema);
export default User;
