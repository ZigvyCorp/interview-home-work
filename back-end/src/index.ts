import express, { Express } from "express";
import dotenv from "dotenv";
import * as mongoose from "mongoose";
import initializeDatabase from "@/utils/initialize-database";
import routes from "@/routes";
import errorHandlerMiddleware from "@/middlewares/error-handler-middleware";
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import cookieParser from "cookie-parser"
import { ONE_MINUTE } from "@/constants/time";
dotenv.config();

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    initializeDatabase();
  })
  .catch((err) => console.log("MongoDB connection error:", err));
// Configure rate limiting
const limiter = rateLimit({
  windowMs: ONE_MINUTE, // 1 minute
  limit: 200,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(limiter);
app.use(cors({
  origin: "http://localhost:5173", // Allow only this origin
  credentials: true, // If you need to allow cookies or other credentials
}));
app.use(express.json());
app.use("/", routes);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
app.use(errorHandlerMiddleware);