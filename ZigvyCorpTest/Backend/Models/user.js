import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        id: {
            type: String,
        },
        username: {
            type: String,
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
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);
export default User;
