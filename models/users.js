import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    username: { type: String, require: true },
    password: { type: String },
    name: { type: String },
    dob: { type: String },
    createdAt: { type: Number }
}, { timestamps: true })

export const UsersModel = mongoose.model('users', UsersSchema, 'users', { autoCreate: false });