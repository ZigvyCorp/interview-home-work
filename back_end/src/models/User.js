const mongoose = require("mongoose");

const Status = require("../models/Enum/Status");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        name: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
            default: Status.ACTIVE,
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
