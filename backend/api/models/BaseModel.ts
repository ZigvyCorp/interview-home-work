import mongoose, { Schema } from "mongoose";

export const BaseSchema: Schema = new mongoose.Schema({
    isDeleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})