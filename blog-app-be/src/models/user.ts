import mongoose, { Document, Model, Schema, SchemaTimestampsConfig, model } from "mongoose";

export interface IUser {
	name: string;
	username: string;
	password: string;
	dob: Date;
}

export interface IUserModel extends IUser, Document, SchemaTimestampsConfig {}

export const UserSchema: Schema = new Schema(
	{
		name: { type: String, require: true },
		username: { type: String, require: true },
		password: { type: String, require: true },
		dob: { type: Date },
	},
	{ timestamps: true }
);

const User = model<IUserModel>("User", UserSchema);

export default User;
