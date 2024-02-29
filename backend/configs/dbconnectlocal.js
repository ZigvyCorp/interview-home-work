const { mongoose } = require("mongoose");

const dbConnectLocal = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Blogs");

    conn.connection.readyState === 1
      ? console.log("DB Local connected")
      : console.log("waiting to connect DB...");
  } catch (error) {
    console.log("DB connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnectLocal;
