import { model, Schema } from "mongoose";

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Tag = model("Tag", tagSchema, "tags");
