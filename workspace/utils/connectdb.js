import mongoose from "mongoose";
import { config } from "dotenv";
config();

export default async () => {
 
  const cnn = await mongoose.connect(
    process.env.MONGO_URI,
    {
      authSource: "admin",
      user,
      pass,
      dbName: "zigvy-interview",
    }
  );
  console.log(`Connected to mongodb on port: ${cnn.connection.port}`);
};
