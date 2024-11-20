const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, saltRounds, (error, hash) => {
        user.password = hash
        next()
    })
})

module.exports = mongoose.model("User", UserSchema);