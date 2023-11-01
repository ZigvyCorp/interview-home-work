import dotenv from "dotenv";
import { ConnectOptions } from "mongoose";

dotenv.config();

const MONGO_OPTIONS: ConnectOptions = {
  retryWrites: true,
  w: "majority",
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || "huu_phuong";
const MONGO_PASSWORD = process.env.MONGO_USERNAME || "ZP9xpI3BtDvkywVL";
const MONGO_HOST = process.env.MONGO_URL || "cluster.eh8tmx8.mongodb.net";

const MONGO = {
  host: MONGO_HOST,
  password: MONGO_PASSWORD,
  options: MONGO_OPTIONS,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;
