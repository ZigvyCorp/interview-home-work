import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;