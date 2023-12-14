const mongoose = require("mongoose");
const Status = require("./Enum/Status");

const roleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
            default: Status.ACTIVE,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Role", roleSchema);
