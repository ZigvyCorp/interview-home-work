const mongoose = require("mongoose");
const initializeData = require("./data");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

// Database conection string
// If you want to use your database, replace the string below:
const DB = "mongodb+srv://vukhanh1209:vk12092001@khanhvu1209.h3rbutk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Fetch data from external API and store to database
// If you use my database, you don't need to execute this function

// initializeData()

// Fetching new data needs waiting, so I suggest using my database

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!  Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
