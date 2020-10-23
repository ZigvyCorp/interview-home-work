import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const env = (key: string) => {
  return process.env[key];
};

export const AppConfig = {
  port: env("PORT"),
  publicUrl: env("PUBLIC_URL"),
  cors: {
    origin: env("CLIENT_ORIGIN"),
    credentials: true,
  },
  database: {
    url: env("MONGODB_URL"),
  },
  jwt: {
    secretKey: "aswjbaKWHaNVKEIA224AW1",
    liveDays: 2,
  },
};
