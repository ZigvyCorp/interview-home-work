import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();
const app = express();
const http = createServer(app);
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
export const io = new Server(http);
io.on("connection", (socket: Socket) => {
  socket.on("joinRoom", (id: string) => {
    socket.join(id);
    console.log(socket.id + "connect");
  });
  socket.on("outRoom", (id: string) => {
    socket.leave(id);
  });
  socket.on("disconnect", () => {
    console.log(socket.id + "is disconnect");
  });
});
app.use("/api", routes);
const URI = process.env.mongo_url;
mongoose
  .connect(`${URI!}`, {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("connect success to mongodb 🍃");
  })
  .catch((err: string) => {
    throw err;
  });
const port = 6030;
http.listen(port, () => {
  console.log(`Server is run on port 🚀 ${port}`);
});
