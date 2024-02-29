import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();
dotenv.config();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = Promise;
mongoose.connect(process.env.DB_HOST);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
app.use(errorHandler);
const server = http.createServer(app);
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
