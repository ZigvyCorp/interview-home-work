import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@${process.env.HOST}`;
console.log(MONGO_URI);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
