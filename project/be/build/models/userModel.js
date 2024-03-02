"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please add your email or phone"],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add your password"],
    },
    rf_token: { type: String, select: false },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("user", userSchema);
