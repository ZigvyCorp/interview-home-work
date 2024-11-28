import mongoose, { Schema } from "mongoose";
import { BaseSchema } from "./BaseModel";

const PostEntities: Schema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
        // ref: 'Users'
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
})

const PostWithBase: Schema = new mongoose.Schema({
    ...BaseSchema.obj,
    ...PostEntities.obj
})

export const PostModel = mongoose.model("PostModel", PostWithBase, "post")