import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		dob: {
			type: String,
			require: true,
		}
	},
	{
		timestamps: true,
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
			}
		}
	}
);

userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;