import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Route } from "./routes/index.js";
const app = express();

//Midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

//Connect database
dotenv.config();
try {
  mongoose.connect(process.env.MONGO_URL); 
  console.log("Successful Connection");
} catch (error) {
  console.log("Fail");
}

//Coutes user
Route(app);

//Create sever
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
