import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import expressMongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json({ limit: "10kb" }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

const limit = rateLimit({
  limit: 3000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from the this IP, please try again in an hour.",
});
app.use("/tawk", limit);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", router);
app.use(expressMongoSanitize());
export default app;
