import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
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
app.use(fileUpload());
app.use("/public", express.static("public"));
app.use(routes());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // TODO: replace console with another logging helper (morgan)
  console.error(err);
  res.status(500).json({
    message: err.message,
  });
});

const startUp = () => {
  // run any startup functions
};

const startApp = async () => {
  await Database.connect();
  app.listen(AppConfig.port, () => {
    startUp();
    console.log(`API server is listening on port ${AppConfig.port}`);
  });
};

startApp();

process.on("exit", async () => {
  await Database.disconnect();
});
