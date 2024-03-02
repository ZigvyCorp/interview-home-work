"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blogSchema = new mongoose_1.default.Schema({
    author: { type: mongoose_1.default.Types.ObjectId, ref: "Users" },
    title: { type: String, require: true, trim: true },
    options: [
        {
            name: { type: String, require: true, unique: true },
            count: { type: Number, default: 0 },
        },
    ],
    user_voted: [{ type: String }],
}, { timestamps: true });
exports.default = mongoose_1.default.model("Poll", blogSchema);
