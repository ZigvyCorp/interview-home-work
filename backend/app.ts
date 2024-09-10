import path from "path";
import express, { NextFunction, Request, Response } from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// import { errorController } from "controllers/error.controller";

import { PostRouter } from "./routes";
import { NotFoundError } from "./utils/app-error";

dotenv.config();
const app = express();

app.use(cors());
// limit requests from 1 IPT

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP. try again in 1 hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/api", limiter);

// // body-parse,reading from body to req.body

app.use(express.json());

app.use("/api", PostRouter);

// app.get("*", (req, res, next) => {
//   if (req.originalUrl.startsWith("/api/"))
//     return next(new NotFoundError("Not found"));
//   res.sendFile(path.join(__dirname, "./client/", "index.html"));
// });

//   global error handler
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`${req.originalUrl} not found on this server.`));
});
// reviews
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Something went wrong", err);
});

export default app;
