import mongoose, { Connection } from "mongoose";
import { AppConfig } from "./config";

export class Database {
  static connection: Connection;

  static async connect() {
    await mongoose
      .connect(AppConfig.database.url || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database");
        this.connection = mongoose.connection;
        this.connection.on("error", (e) => {
          console.error("connection error:", e);
          process.exit();
        });
      });
  }

  static async disconnect() {
    if (!this.connection) return;
    if (this.connection.readyState !== 0 && this.connection.readyState !== 3)
      return;

    await this.connection.close();
  }
}
