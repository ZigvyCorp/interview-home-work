import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const UserTest = mongoose.model('User', userSchema);
export default UserTest;
