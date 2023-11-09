import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { InternalServerError } from "./middleware/helpers/apiError";

import routes from "./routes";
import { ErrorHandler } from "./utils/errorHandler";
import httpStatus from "http-status";

const app = express();

/* Creating an instance of the express application. */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
// app.use("/public", express.static("public"));

/* This is a conditional statement that checks if the environment is not production. If it is not
production, it will load the environment variables from the config.env file. */
if (process.env.NODE_ENV != "production") {
  require("dotenv").config({
    path: ".env.local",
  });
}

// import routes
// const mainRoutes = require("./routes/mainRouter");
// Use Routes
app.use("/api/v1/", routes);

app.all("*", (req, res, next) => {
  throw new ErrorHandler(`Requested URL ${req.path} not found!`, 404);
});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error("afds", err);

  const statusCode = err.status || 500;
  res.status(statusCode).json({
    status: statusCode,
    success: false,
    message: err.message,
    stack: err.stack,
  });
});

/**
 * Adding Response Header to Avoid/Preventing CORS Issued
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Method", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

// app.use(InternalServerError());

export default app;
