import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const connectionString = process.env.ATLAS_URI || "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// set up mongoose
mongoose.set("strictQuery", false);
const connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`MongoDB Connected`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDatabase();

// Initialize CORS middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

routes(app);
