const { mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL_MONGODB);

    conn.connection.readyState === 1
      ? console.log("DB connected")
      : console.log("waiting to connect DB...");
  } catch (error) {
    console.log("DB connection is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;
