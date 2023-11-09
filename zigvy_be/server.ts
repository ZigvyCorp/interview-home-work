import express, { Express, Request, Response } from "express";
// import serverless from "serverless-http";
import * as dotenv from "dotenv";
import http from "http";
import connectDatabase from "./src/config/dataConnect";

import app from "./src/app";

dotenv.config();

// const connectDatabase = require('./config/database');
connectDatabase();

// const app: Express = express();
const port = process.env.PORT || 4000;
// const port = process.env.PORT;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});

// export default serverless(app);

// module.exports.handler = serverless(app);
