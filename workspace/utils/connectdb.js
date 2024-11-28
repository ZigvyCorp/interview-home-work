import mongoose from "mongoose";
import { config } from "dotenv";
config();

export default async () => {
  const {
    MONGO_USERNAME: user,
    MONGO_PASSWORD: pass,
    MONGO_PORT: port,
    MONGO_HOST: host,
    NODE_ENV: env,
    MONGO_DB_NAME: dbName,
  } = process.env;
  const cnn = await mongoose.connect(
    `mongodb://${env === "production" ? `${host}:${port}` : "localhost:27017"}`,
    {
      authSource: "admin",
      user,
      pass,
      dbName,
    }
  );
  console.log(`Connected to mongodb on port: ${cnn.connection.port}`);
};
