import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        name: String,
        dob: Date,
    },
    { timestamps: true });

const User = mongoose.model('User', userSchema, 'users');

export default User;