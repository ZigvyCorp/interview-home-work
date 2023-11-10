import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
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
});

const User = mongoose.model("User", userSchema);
export default User;
