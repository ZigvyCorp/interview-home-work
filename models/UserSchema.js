const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            match: /^[A-Za-z0-9_.-]+$/,
        },
        password: {
            type: String,
            required: true,
        },
        name: { type: String, required: true },
        dateCreated: {
            type: Date,
            default: function () {
                return Date.now();
            },
        },
    },
    {
        collection: "user",
    }
);

// comparePassword
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
