import mongoose from "mongoose";
import { config } from "dotenv";
config();

export default async () => {
    console.log(process.env.MONGO_URI);
  const cnn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connected to mongodb on port: ${cnn.connection.port}`);
};
