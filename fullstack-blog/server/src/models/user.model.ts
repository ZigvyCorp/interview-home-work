import { model, models, Schema } from "mongoose";
import { createJWT } from "../utils";
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

userSchema.methods.signToken = function () {
	const token = createJWT(this._id, this.email, this.name);
	return token;
};

const User = models.User || model("User", userSchema);
export default User;
