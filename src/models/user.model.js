import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema({
	id: {
		type: Number,
		unique: true,
	},
	username: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	name: {
		type: String,
	},
	dob: {
		type: String,
	},
	created_at: {
		type: Date,
	},
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = bcrypt.hash(this.password, salt);
	next();
});

export default mongoose.model("User", UserSchema);
