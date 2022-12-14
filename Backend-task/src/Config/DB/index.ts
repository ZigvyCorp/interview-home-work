import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB ?? "");
    console.log("connect success!");
  } catch (error) {
    console.log("connect fail!");
  }
};
export default connect;
