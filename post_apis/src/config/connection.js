import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    console.log("connected to db");
  } catch (error) {
    throw new Error(error);
  }
};
