import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import passport from "passport";
import "reflect-metadata";
import { AppConfig } from "./config";
import { Database } from "./database";
import { configPassport } from "./passport-config";
import { routes } from "./routes";

const app = express();

configPassport();

app.use(cors(AppConfig.cors));
app.use(cookieParser(AppConfig.jwt.secretKey));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes());

const startUp = () => {};

const startApp = async () => {
  await Database.connect();
  app.listen(AppConfig.port, () => {
    startUp();
    console.log(`API server is listening on port ${AppConfig.port}`);
  });
};

startApp();

process.on("uncaughtException", async () => {
  await Database.disconnect();
});
