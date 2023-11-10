import mongoose from "mongoose";
import { IUser } from "../types/user/user.type";

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
		},
		name: {
			type: String,
			trim: true,
			unique: true,
		},
		dob: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<IUser>("Users", UserSchema);
