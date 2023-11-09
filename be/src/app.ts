import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { ErrorHandler, HandleErrorNotFound } from "./middlewares/handle-error";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
import "./db/connect.mongodb";
import router from "./routes/routes";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  return res.status(200).send("Working");
});

app.use(router);

app.use(HandleErrorNotFound);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
