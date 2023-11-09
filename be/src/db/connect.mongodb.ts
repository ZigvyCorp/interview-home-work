import mongoose from "mongoose";

class Database {
  private connectionString: string =
    process.env.CONNECTION_STRING || `mongodb://localhost:27017/mongodb`;
  private static instance: Database;

  constructor() {
    this.connectDB();
  }

  connectDB() {
    mongoose
      .connect(this.connectionString)
      .then(() => {
        console.log(`[MongoDB] Connected MongoDB ${this.connectionString}`);
      })
      .catch((err) => {
        console.log("[MongoDB] Error: ", err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

export default Database.getInstance();
