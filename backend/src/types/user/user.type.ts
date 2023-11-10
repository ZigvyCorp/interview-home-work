import { Document } from "mongoose";

export interface IUser extends Document {
	username: string;
	password: string;
	name: string;
	avatar: string;
	dob: string;
	createAt: string;
	_doc: object;
}
