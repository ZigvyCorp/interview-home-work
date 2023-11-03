import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    dob: {
        type: String,
    },
    created_at: {
        type: Number,
    }
})

const userModel = mongoose.model('User', userSchema);
export default userModel;