import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const uri = process.env.DATABASE!;

const connect = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error(err);
      console.error("fail to connect to DB");
    });
};
export default connect;
